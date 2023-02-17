import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingItem) {
    return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem));
  }

  return [...cartItems, { ...productToAdd, amount: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemsToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
