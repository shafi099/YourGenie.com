// CartContext.js

import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ cartbox: initialCartbox, setCartbox, children }) => {
  const [cartbox, setCartboxState] = useState(initialCartbox);

  // Update the cartbox state when setCartbox is called
  const updateCartbox = (newCartbox) => {
    setCartboxState(newCartbox);
    setCartbox(newCartbox);
  };

  return (
    <CartContext.Provider value={{ cartbox, setCartbox: updateCartbox }}>
      {children}
    </CartContext.Provider>
  );
};
