import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  const renderHeader = () => {
    return render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };

  it('should render main title', () => {
    renderHeader();
    expect(screen.getByText('The Daily Harvest')).toBeInTheDocument();
  });

  it('should render navigation', () => {
    renderHeader();
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('should render Home link', () => {
    renderHeader();
    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should render Products link', () => {
    renderHeader();
    const productsLink = screen.getByRole('link', { name: /Products/i });
    expect(productsLink).toBeInTheDocument();
    expect(productsLink).toHaveAttribute('href', '/products');
  });

  it('should render Cart link', () => {
    renderHeader();
    const cartLink = screen.getByRole('link', { name: /Cart/i });
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute('href', '/cart');
  });

  it('should render Admin Login link', () => {
    renderHeader();
    const loginLink = screen.getByRole('link', { name: /Admin Login/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  it('should have all four navigation links', () => {
    renderHeader();
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(4);
  });

  it('should render header element', () => {
    renderHeader();
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
