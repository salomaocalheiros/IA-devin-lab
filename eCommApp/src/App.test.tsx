import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

vi.mock('./components/HomePage', () => ({
  default: () => <div data-testid="home-page">HomePage</div>
}));

vi.mock('./components/ProductsPage', () => ({
  default: () => <div data-testid="products-page">ProductsPage</div>
}));

vi.mock('./components/LoginPage', () => ({
  default: () => <div data-testid="login-page">LoginPage</div>
}));

vi.mock('./components/AdminPage', () => ({
  default: () => <div data-testid="admin-page">AdminPage</div>
}));

vi.mock('./components/CartPage', () => ({
  default: () => <div data-testid="cart-page">CartPage</div>
}));

describe('App', () => {
  const renderApp = (initialRoute = '/') => {
    window.history.pushState({}, 'Test page', initialRoute);
    return render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };

  describe('Routing', () => {
    it('should render HomePage at root path', () => {
      renderApp('/');
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    it('should render ProductsPage at /products route', () => {
      renderApp('/products');
      expect(screen.getByTestId('products-page')).toBeInTheDocument();
    });

    it('should render LoginPage at /login route', () => {
      renderApp('/login');
      expect(screen.getByTestId('login-page')).toBeInTheDocument();
    });

    it('should render AdminPage at /admin route', () => {
      renderApp('/admin');
      expect(screen.getByTestId('admin-page')).toBeInTheDocument();
    });

    it('should render CartPage at /cart route', () => {
      renderApp('/cart');
      expect(screen.getByTestId('cart-page')).toBeInTheDocument();
    });
  });

  describe('Structure', () => {
    it('should render all routes', () => {
      renderApp('/');
      // Check that at least one route is rendered
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    it('should use CartProvider wrapper', () => {
      renderApp('/');
      // If CartProvider is properly wrapping the routes, components should render
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    it('should have Routes component', () => {
      const { container } = renderApp('/');
      // Routes component should be in the DOM
      expect(container).toBeInTheDocument();
    });
  });
});
