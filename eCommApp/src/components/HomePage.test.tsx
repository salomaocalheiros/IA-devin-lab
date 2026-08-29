import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

vi.mock('./Header', () => ({
  default: () => <div data-testid="header">Header</div>
}));

vi.mock('./Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>
}));

describe('HomePage', () => {
  const renderHomePage = () => {
    return render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  };

  it('should render Header component', () => {
    renderHomePage();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should render Footer component', () => {
    renderHomePage();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should display welcome heading', () => {
    renderHomePage();
    expect(screen.getByText(/Welcome to the The Daily Harvest/i)).toBeInTheDocument();
  });

  it('should display welcome message', () => {
    renderHomePage();
    expect(screen.getByText(/Check out our products page for some great deals/i)).toBeInTheDocument();
  });

  it('should have main content area', () => {
    renderHomePage();
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('should have app container div', () => {
    renderHomePage();
    const appDiv = document.querySelector('.app');
    expect(appDiv).toBeInTheDocument();
  });
});
