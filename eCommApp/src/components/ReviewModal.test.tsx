import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewModal from './ReviewModal';
import { Product } from '../types';

const TEST_PRODUCT: Product = {
  id: '1',
  name: 'Apple',
  price: 1.5,
  description: 'Fresh apples',
  image: 'apple.jpg',
  reviews: [{ author: 'John', comment: 'Great product!', date: new Date().toISOString() }],
  inStock: true,
};

const EMPTY_PRODUCT: Product = {
  id: '2',
  name: 'Orange',
  price: 2,
  description: 'Fresh oranges',
  image: 'orange.jpg',
  reviews: [],
  inStock: true,
};

describe('ReviewModal', () => {
  const mockOnClose = vi.fn();
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
    mockOnSubmit.mockClear();
  });

  it('does not render when no product is provided', () => {
    const { container } = render(
      <ReviewModal product={null} onClose={mockOnClose} onSubmit={mockOnSubmit} />
    );

    expect(container.firstChild).toBeNull();
  });

  it('renders the modal heading and existing reviews', () => {
    render(<ReviewModal product={TEST_PRODUCT} onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    expect(screen.getByText(`Reviews for ${TEST_PRODUCT.name}`)).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Great product!')).toBeInTheDocument();
  });

  it('shows the no reviews placeholder for products without reviews', () => {
    render(<ReviewModal product={EMPTY_PRODUCT} onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    expect(screen.getByText('No reviews yet.')).toBeInTheDocument();
  });

  it('renders the review form fields', () => {
    render(<ReviewModal product={TEST_PRODUCT} onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    expect(screen.getByText('Leave a Review')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your review')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('submits a new review with the provided data', async () => {
    const user = userEvent.setup();
    render(<ReviewModal product={TEST_PRODUCT} onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    await user.type(screen.getByPlaceholderText('Your name'), 'Alice');
    await user.type(screen.getByPlaceholderText('Your review'), 'Fantastic product!');
    await user.click(screen.getByRole('button', { name: /Submit/i }));

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        author: 'Alice',
        comment: 'Fantastic product!',
        date: expect.any(String),
      })
    );
  });

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup();
    render(<ReviewModal product={TEST_PRODUCT} onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    await user.click(screen.getByRole('button', { name: /Close/i }));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when the backdrop is clicked', async () => {
    const user = userEvent.setup();
    render(<ReviewModal product={TEST_PRODUCT} onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    await user.click(document.querySelector('.modal-backdrop') as Element);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
