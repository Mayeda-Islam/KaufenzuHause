import React from "react";
import { createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  console.log("CART: ", cart);
  const handleAddToCart = (_product, _cartQuantity) => {
    setCart([...cart, { ..._product, quiatity: _cartQuantity }]);
  };

  const context = {
    cart,
    setCart,
    handleAddToCart,
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default ContextProvider;
