import { describe, it, expect, vi, beforeEach } from 'vitest';
import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartPage from './CartPage';
import { CartProvider, CartContext } from '../context/CartContext';
import type { Product } from '../types';

// Mock child components
vi.mock('./Header', () => ({
  default: () => <div data-testid="header">Header</div>
}));

vi.mock('./Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>
}));

vi.mock('./CheckoutModal', () => ({
  default: ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => (
    <div data-testid="checkout-modal">
      <button data-testid="confirm-btn" onClick={onConfirm}>Confirm</button>
      <button data-testid="cancel-btn" onClick={onCancel}>Cancel</button>
    </div>
  )
}));

// ✅ MELHORIA 1: Centralizar dados de teste
const TEST_PRODUCT: Product = {
  id: '1',
  name: 'Test Item',
  price: 10.99,
  image: 'test.png'
};

const SECOND_PRODUCT: Product = {
  id: '2',
  name: 'Item 2',
  price: 20,
  image: 'test2.png'
};

// ✅ MELHORIA 2: Renderizar com item de forma síncrona
function renderWithProvider(component: React.ReactElement) {
  return render(<CartProvider>{component}</CartProvider>);
}

function renderCartPageWithItem(product: Product = TEST_PRODUCT) {
  return renderWithProvider(
    <CartContextWrapper product={product}>
      <CartPage />
    </CartContextWrapper>
  );
}

// Helper que injeta item de forma síncrona, não via useEffect
function CartContextWrapper({ product, children }: { product: Product; children: React.ReactNode }) {
  const context = useContext(CartContext);
  
  React.useMemo(() => {
    if (context && context.cartItems.length === 0) {
      context.addToCart(product);
    }
  }, [context, product]);
  
  return <>{children}</>;
}

describe('CartPage', () => {
  describe('Empty Cart', () => {
    it('should display cart title when cart is empty', () => {
      renderWithProvider(<CartPage />);
      
      expect(screen.getByText('Your Cart')).toBeInTheDocument();
    });

    it('should display empty cart message when no items present', () => {
      renderWithProvider(<CartPage />);
      
      expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    });

    it('should not render checkout button when cart is empty', () => {
      renderWithProvider(<CartPage />);
      
      expect(screen.queryByRole('button', { name: /checkout/i })).not.toBeInTheDocument();
    });

    // ✅ MELHORIA 3: Separar assertions em testes distintos
    it('should render Header component', () => {
      renderWithProvider(<CartPage />);
      
      expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('should render Footer component', () => {
      renderWithProvider(<CartPage />);
      
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
  });

  describe('Cart with Items - Checkout Button', () => {
    it('should display checkout button when cart has items', () => {
      renderCartPageWithItem();
      
      const checkoutBtn = screen.getByRole('button', { name: /checkout/i });
      expect(checkoutBtn).toBeInTheDocument('Checkout button must be visible when items exist');
    });

    it('should enable checkout button for user interaction', () => {
      renderCartPageWithItem();
      
      const checkoutBtn = screen.getByRole('button', { name: /checkout/i });
      expect(checkoutBtn).toBeEnabled();
    });

    it('should display correct checkout button label', () => {
      renderCartPageWithItem();
      
      expect(screen.getByRole('button', { name: /checkout/i })).toHaveTextContent('Checkout');
    });
  });

  describe('Checkout Modal Display', () => {
    it('should not display checkout modal initially', () => {
      renderCartPageWithItem();
      
      expect(screen.queryByTestId('checkout-modal')).not.toBeInTheDocument();
    });

    // ✅ MELHORIA 4: Usar userEvent ao invés de fireEvent
    it('should display checkout modal when checkout button is clicked', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      const checkoutBtn = screen.getByRole('button', { name: /checkout/i });
      await user.click(checkoutBtn);
      
      expect(screen.getByTestId('checkout-modal')).toBeInTheDocument();
    });

    it('should render confirm button inside modal', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      
      expect(screen.getByTestId('confirm-btn')).toBeInTheDocument();
    });

    it('should render cancel button inside modal', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      
      expect(screen.getByTestId('cancel-btn')).toBeInTheDocument();
    });
  });

  describe('Checkout Modal Cancel Flow', () => {
    it('should close modal when cancel button is clicked', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('cancel-btn'));
      
      expect(screen.queryByTestId('checkout-modal')).not.toBeInTheDocument();
    });

    // ✅ MELHORIA 3: Separar assertions
    it('should display cart title after canceling checkout', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('cancel-btn'));
      
      expect(screen.getByText('Your Cart')).toBeInTheDocument();
    });

    it('should display checkout button after canceling checkout', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('cancel-btn'));
      
      expect(screen.getByRole('button', { name: /checkout/i })).toBeInTheDocument();
    });

    it('should preserve cart items after canceling checkout', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('cancel-btn'));
      
      expect(screen.getByText(TEST_PRODUCT.name)).toBeInTheDocument();
    });

    it('should allow reopening checkout after cancellation', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      // First attempt
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('cancel-btn'));
      expect(screen.queryByTestId('checkout-modal')).not.toBeInTheDocument();
      
      // Second attempt
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      
      expect(screen.getByTestId('checkout-modal')).toBeInTheDocument();
    });
  });

  describe('Order Confirmation Flow', () => {
    it('should display order processed confirmation message', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('confirm-btn'));
      
      expect(screen.getByText('Your order has been processed!')).toBeInTheDocument();
    });

    it('should display processed item name in confirmation view', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('confirm-btn'));
      
      expect(screen.getByText(TEST_PRODUCT.name)).toBeInTheDocument();
    });

    it('should display processed item price in confirmation view', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('confirm-btn'));
      
      expect(screen.getByText(/\$10\.99/)).toBeInTheDocument();
    });

    it('should display processed item quantity in confirmation view', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('confirm-btn'));
      
      expect(screen.getByText('Quantity: 1')).toBeInTheDocument();
    });

    it('should render Header in confirmation view', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('confirm-btn'));
      
      expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('should render Footer in confirmation view', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('confirm-btn'));
      
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('should hide checkout modal after order confirmation', async () => {
      const user = userEvent.setup();
      renderCartPageWithItem();
      
      await user.click(screen.getByRole('button', { name: /checkout/i }));
      await user.click(screen.getByTestId('confirm-btn'));
      
      expect(screen.queryByTestId('checkout-modal')).not.toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('should throw error when CartContext is not provided', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      expect(() => {
        render(<CartPage />);
      }).toThrow('CartContext must be used within a CartProvider');
      
      consoleSpy.mockRestore();
    });
  });
});

describe('CartContext - addToCart', () => {
  it('should add new item to cart', async () => {
    const user = userEvent.setup();
    renderWithProvider(<CartContextTester product={TEST_PRODUCT} />);
    
    await user.click(screen.getByText('Add Item'));
    
    expect(screen.getByText('Cart Items: 1')).toBeInTheDocument();
  });

  it('should increment quantity when adding duplicate item', async () => {
    const user = userEvent.setup();
    renderWithProvider(<CartContextTester product={TEST_PRODUCT} />);
    
    await user.click(screen.getByText('Add Item'));
    await user.click(screen.getByText('Add Item'));
    
    expect(screen.getByText('Item Quantity: 2')).toBeInTheDocument();
  });

  it('should add multiple different items to cart', async () => {
    const user = userEvent.setup();
    renderWithProvider(<CartContextTesterMultiple />);
    
    await user.click(screen.getByText('Add Items'));
    
    expect(screen.getByText('Cart Items: 2')).toBeInTheDocument();
  });
});

describe('CartContext - clearCart', () => {
  it('should clear all items from cart', async () => {
    const user = userEvent.setup();
    renderWithProvider(<CartContextClearer />);
    
    await user.click(screen.getByText('Add Item'));
    expect(screen.getByText('Cart Items: 1')).toBeInTheDocument();
    
    await user.click(screen.getByText('Clear Cart'));
    
    expect(screen.getByText('Cart Items: 0')).toBeInTheDocument();
  });
});

// Helper components
function CartContextTester({ product }: { product: Product }) {
  const context = useContext(CartContext);

  if (!context) return <div>No context</div>;

  return (
    <div>
      <button onClick={() => context.addToCart(product)}>Add Item</button>
      <div>Cart Items: {context.cartItems.length}</div>
      {context.cartItems.map(item => (
        <div key={item.id}>Item Quantity: {item.quantity}</div>
      ))}
    </div>
  );
}

function CartContextTesterMultiple() {
  const context = useContext(CartContext);

  if (!context) return <div>No context</div>;

  return (
    <div>
      <button onClick={() => {
        context.addToCart(TEST_PRODUCT);
        context.addToCart(SECOND_PRODUCT);
      }}>
        Add Items
      </button>
      <div>Cart Items: {context.cartItems.length}</div>
    </div>
  );
}

function CartContextClearer() {
  const context = useContext(CartContext);

  if (!context) return <div>No context</div>;

  return (
    <div>
      <button onClick={() => context.addToCart(TEST_PRODUCT)}>Add Item</button>
      <button onClick={() => context.clearCart()}>Clear Cart</button>
      <div>Cart Items: {context.cartItems.length}</div>
    </div>
  );
}
