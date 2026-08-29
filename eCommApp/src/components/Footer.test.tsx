import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  const renderFooter = () => {
    return render(<Footer />);
  };

  it('should render footer element', () => {
    renderFooter();
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should display copyright text', () => {
    renderFooter();
    expect(screen.getByText(/©\s*2025\s*The Daily Harvest/i)).toBeInTheDocument();
  });

  it('should display "All rights reserved" text', () => {
    renderFooter();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it('should display complete footer message', () => {
    renderFooter();
    expect(screen.getByText(/©\s*2025\s*The Daily Harvest\.\s*All rights reserved\./i)).toBeInTheDocument();
  });
});
