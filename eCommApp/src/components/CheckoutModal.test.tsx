import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutModal from './CheckoutModal';

describe('CheckoutModal', () => {
  const mockOnConfirm = vi.fn();
  const mockOnCancel = vi.fn();

  beforeEach(() => {
    mockOnConfirm.mockClear();
    mockOnCancel.mockClear();
  });

  describe('Modal Structure', () => {
    it('should render modal backdrop', () => {
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);
      const backdrop = document.querySelector('.modal-backdrop');
      expect(backdrop).toBeInTheDocument();
    });

    it('should render modal content', () => {
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);
      const content = document.querySelector('.modal-content');
      expect(content).toBeInTheDocument();
    });

    it('should display confirmation heading', () => {
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);
      expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    });

    it('should display confirmation message', () => {
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);
      expect(screen.getByText('Do you want to proceed with the checkout?')).toBeInTheDocument();
    });
  });

  describe('Buttons', () => {
    it('should render Continue Checkout button', () => {
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);
      expect(screen.getByRole('button', { name: /Continue Checkout/i })).toBeInTheDocument();
    });

    it('should render Return to cart button', () => {
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);
      expect(screen.getByRole('button', { name: /Return to cart/i })).toBeInTheDocument();
    });

    it('should have two action buttons', () => {
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBe(2);
    });
  });

  describe('Button Interactions', () => {
    it('should call onConfirm when Continue Checkout is clicked', async () => {
      const user = userEvent.setup();
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);

      const confirmButton = screen.getByRole('button', { name: /Continue Checkout/i });
      await user.click(confirmButton);

      expect(mockOnConfirm).toHaveBeenCalledTimes(1);
    });

    it('should call onCancel when Return to cart is clicked', async () => {
      const user = userEvent.setup();
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);

      const cancelButton = screen.getByRole('button', { name: /Return to cart/i });
      await user.click(cancelButton);

      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });

    it('should not call onConfirm when cancel button is clicked', async () => {
      const user = userEvent.setup();
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);

      const cancelButton = screen.getByRole('button', { name: /Return to cart/i });
      await user.click(cancelButton);

      expect(mockOnConfirm).not.toHaveBeenCalled();
    });

    it('should not call onCancel when confirm button is clicked', async () => {
      const user = userEvent.setup();
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);

      const confirmButton = screen.getByRole('button', { name: /Continue Checkout/i });
      await user.click(confirmButton);

      expect(mockOnCancel).not.toHaveBeenCalled();
    });
  });

  describe('Styling', () => {
    it('should have cancel button with correct class', () => {
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);
      const cancelButton = screen.getByRole('button', { name: /Return to cart/i });
      expect(cancelButton).toHaveClass('cancel-btn');
    });

    it('should have action buttons container', () => {
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);
      const actionsContainer = document.querySelector('.checkout-modal-actions');
      expect(actionsContainer).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);
      const heading = screen.getByText('Are you sure?');
      expect(heading.tagName).toBe('H2');
    });

    it('should have button roles for interactive elements', () => {
      render(<CheckoutModal onConfirm={mockOnConfirm} onCancel={mockOnCancel} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.every(btn => btn.tagName === 'BUTTON')).toBe(true);
    });
  });
});
