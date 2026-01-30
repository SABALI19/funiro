import { useState } from "react";
import { CartContext } from "./CartContextValue";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ADD ITEM (variant aware) - with NaN protection
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
            ? { 
                ...item, 
                quantity: (Number(item.quantity) || 0) + (Number(product.quantity) || 1) 
              }
            : item
        );
      }

      return [...prev, { 
        ...product, 
        quantity: Number(product.quantity) || 1,
        price: Number(product.price) || 0
      }];
    });
  };

  // REMOVE ITEM (variant aware)
  const removeFromCart = (id, color, size) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.color === color &&
            item.size === size
          )
      )
    );
  };

  // UPDATE QUANTITY (variant aware) - with NaN protection
  const updateQuantity = (id, color, size, qty) => {
    const quantity = Number(qty);
    if (quantity < 1 || isNaN(quantity)) return;
    
    setCart((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.color === color &&
        item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  // CLEAR CART - NEW FUNCTION
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart'); // Also clear from localStorage if you're using it
  };

  // SUBTOTAL - with NaN protection
  const cartSubtotal = cart.reduce(
    (total, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return total + (price * quantity);
    },
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,        // ✅ Add this to the context value
        cartSubtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};