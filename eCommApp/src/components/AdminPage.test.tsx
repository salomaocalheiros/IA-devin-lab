import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AdminPage from './AdminPage';

vi.mock('./Header', () => ({
  default: () => <div data-testid="header">Header</div>
}));

vi.mock('./Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>
}));

const renderAdminPage = () => {
  return render(
    <BrowserRouter>
      <AdminPage />
    </BrowserRouter>
  );
};

describe('AdminPage', () => {
  it('renders the admin portal title and layout', () => {
    renderAdminPage();

    expect(screen.getByText('Welcome to the admin portal.')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders the sale form controls', () => {
    renderAdminPage();

    expect(screen.getByLabelText(/Set Sale Percent/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /End Sale/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Back to Storefront/i })).toBeInTheDocument();
  });

  it('updates the input when the user types a new percentage', async () => {
    const user = userEvent.setup();
    renderAdminPage();

    const input = screen.getByDisplayValue('0') as HTMLInputElement;
    await user.clear(input);
    await user.type(input, '25');

    expect(input.value).toBe('25');
  });

  it('sets a valid sale percentage and shows the sale message', async () => {
    const user = userEvent.setup();
    renderAdminPage();

    const input = screen.getByDisplayValue('0') as HTMLInputElement;
    await user.clear(input);
    await user.type(input, '25');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText('All products are 25% off!')).toBeInTheDocument();
    expect(screen.queryByText(/Invalid input/i)).not.toBeInTheDocument();
  });

  it('shows an error message for invalid input', async () => {
    const user = userEvent.setup();
    renderAdminPage();

    const input = screen.getByDisplayValue('0') as HTMLInputElement;
    await user.clear(input);
    await user.type(input, 'abc');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/Invalid input/i)).toBeInTheDocument();
    expect(screen.getByText(/abc/i)).toBeInTheDocument();
  });

  it('resets the sale and field when the user ends the sale', async () => {
    const user = userEvent.setup();
    renderAdminPage();

    const input = screen.getByDisplayValue('0') as HTMLInputElement;
    await user.clear(input);
    await user.type(input, '40');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText('All products are 40% off!')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /End Sale/i }));

    expect(screen.getByText('No sale active.')).toBeInTheDocument();
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
  });
});
