"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// Helper function to safely parse localStorage data
const getLocalStorage = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  }
  return defaultValue;
};

export function CartProvider({ children }) {
  // Initialize state from localStorage if available
  const [cartItems, setCartItems] = useState(() => 
    getLocalStorage('cartItems', [])
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Update localStorage whenever cart items change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, selectedSize) => {
    setCartItems(prev => {
      const existingItem = prev.find(
        item => item.id === product.id && item.size === selectedSize
      );

      if (existingItem) {
        const updatedItems = prev.map(item =>
          item.id === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedItems;
      }

      return [...prev, { ...product, size: selectedSize, quantity: 1 }];
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems(prev => 
      prev.filter(item => !(item.id === productId && item.size === size))
    );
  };

  // Add quantity control functions
  const incrementQuantity = (productId, size) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (productId, size) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId && item.size === size && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      // Convert $ to ₦ (example rate: 1$ = ₦750)
      const priceInNaira = parseFloat(item.price.replace('$', '')) * 750;
      return total + priceInNaira * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      setCartItems,
      addToCart, 
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      isCartOpen,
      setIsCartOpen,
      cartCount: cartItems.reduce((total, item) => total + item.quantity, 0),
      totalPrice: getTotalPrice()
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext); 