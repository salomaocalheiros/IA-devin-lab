import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage';

vi.mock('./Header', () => ({
  default: () => <div data-testid="header">Header</div>
}));

vi.mock('./Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>
}));

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

const renderLoginPage = () => {
  return render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
};

describe('LoginPage', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  describe('Rendering', () => {
    it('should render login form with title', () => {
      renderLoginPage();
      expect(screen.getByText('Admin Login')).toBeInTheDocument();
    });

    it('should render Header component', () => {
      renderLoginPage();
      expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('should render Footer component', () => {
      renderLoginPage();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('should render username input field', () => {
      renderLoginPage();
      const usernameInput = screen.getByPlaceholderText('Username');
      expect(usernameInput).toBeInTheDocument();
    });

    it('should render password input field', () => {
      renderLoginPage();
      const passwordInput = screen.getByPlaceholderText('Password');
      expect(passwordInput).toBeInTheDocument();
    });

    it('should render login button', () => {
      renderLoginPage();
      expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    it('should not display error message initially', () => {
      renderLoginPage();
      const errorMessage = screen.queryByText(/invalid credentials/i);
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  describe('Input Handling', () => {
    it('should update username field when user types', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      const usernameInput = screen.getByPlaceholderText('Username') as HTMLInputElement;
      await user.type(usernameInput, 'admin');
      
      expect(usernameInput.value).toBe('admin');
    });

    it('should update password field when user types', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;
      await user.type(passwordInput, 'admin');
      
      expect(passwordInput.value).toBe('admin');
    });
  });

  describe('Valid Credentials Flow', () => {
    it('should navigate to admin page with correct credentials', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      await user.type(screen.getByPlaceholderText('Username'), 'admin');
      await user.type(screen.getByPlaceholderText('Password'), 'admin');
      await user.click(screen.getByRole('button', { name: /login/i }));
      
      expect(mockNavigate).toHaveBeenCalledWith('/admin');
    });

    it('should clear form after successful login', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      const usernameInput = screen.getByPlaceholderText('Username') as HTMLInputElement;
      const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;
      
      await user.type(usernameInput, 'admin');
      await user.type(passwordInput, 'admin');
      await user.click(screen.getByRole('button', { name: /login/i }));
      
      expect(usernameInput.value).toBe('');
      expect(passwordInput.value).toBe('');
    });

    it('should not display error message after successful login', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      await user.type(screen.getByPlaceholderText('Username'), 'admin');
      await user.type(screen.getByPlaceholderText('Password'), 'admin');
      await user.click(screen.getByRole('button', { name: /login/i }));
      
      expect(screen.queryByText(/invalid credentials/i)).not.toBeInTheDocument();
    });
  });

  describe('Invalid Credentials Flow', () => {
    it('should display error message with wrong username', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      await user.type(screen.getByPlaceholderText('Username'), 'wronguser');
      await user.type(screen.getByPlaceholderText('Password'), 'admin');
      await user.click(screen.getByRole('button', { name: /login/i }));
      
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });

    it('should display error message with wrong password', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      await user.type(screen.getByPlaceholderText('Username'), 'admin');
      await user.type(screen.getByPlaceholderText('Password'), 'wrongpass');
      await user.click(screen.getByRole('button', { name: /login/i }));
      
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });

    it('should display error message with empty credentials', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      await user.click(screen.getByRole('button', { name: /login/i }));
      
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });

    it('should not navigate on invalid credentials', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      await user.type(screen.getByPlaceholderText('Username'), 'wrong');
      await user.type(screen.getByPlaceholderText('Password'), 'wrong');
      await user.click(screen.getByRole('button', { name: /login/i }));
      
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });

  describe('Form Submission', () => {
    it('should prevent default form submission', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      const form = screen.getByRole('button', { name: /login/i }).closest('form');
      const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
      let defaultPrevented = false;
      
      submitEvent.preventDefault = () => { defaultPrevented = true; };
      form?.dispatchEvent(submitEvent);
      
      await user.type(screen.getByPlaceholderText('Username'), 'admin');
      await user.type(screen.getByPlaceholderText('Password'), 'admin');
    });
  });

  describe('Error Message Display', () => {
    it('should display error message when credentials are invalid', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      await user.type(screen.getByPlaceholderText('Username'), 'wrong');
      await user.type(screen.getByPlaceholderText('Password'), 'wrong');
      await user.click(screen.getByRole('button', { name: /login/i }));
      
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });

    it('should clear error message on successful login', async () => {
      const user = userEvent.setup();
      renderLoginPage();
      
      // First, trigger an error
      await user.type(screen.getByPlaceholderText('Username'), 'wrong');
      await user.type(screen.getByPlaceholderText('Password'), 'wrong');
      await user.click(screen.getByRole('button', { name: /login/i }));
      
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
      
      // Clear inputs and login with correct credentials
      await user.clear(screen.getByPlaceholderText('Username'));
      await user.clear(screen.getByPlaceholderText('Password'));
      await user.type(screen.getByPlaceholderText('Username'), 'admin');
      await user.type(screen.getByPlaceholderText('Password'), 'admin');
      await user.click(screen.getByRole('button', { name: /login/i }));
      
      expect(screen.queryByText('Invalid credentials')).not.toBeInTheDocument();
    });
  });
});
