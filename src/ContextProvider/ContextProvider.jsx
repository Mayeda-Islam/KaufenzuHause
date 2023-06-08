import React, { useEffect } from "react";
import { createContext } from "react";
import swal from "sweetalert";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (_product, _cartQuantity) => {
    if (_cartQuantity === 0) {
      swal("warning", "Please increase quantity", "warning");
      return;
    }
    const itemIndex = cart.findIndex((item) => item._id === _product._id);
    if (itemIndex >= 0) {
      swal("warning", "The item already added to cart", "warning");
      return;
    }

    setCart([...cart, { ..._product, quantity: _cartQuantity }]);
  };

  const removeFromCart = (_id) => {
    setCart(cart.filter((item) => item._id !== _id));
  };

  const increment = (_id) => {
    const itemIndex = cart.findIndex((item) => item._id === _id);

    if (itemIndex >= 0) {
      const updatedItem = {
        ...cart[itemIndex],
        quantity: cart[itemIndex].quantity + 1,
      };

      const updatedCart = [...cart];
      updatedCart[itemIndex] = updatedItem;
      setCart(updatedCart);
    }
  };

  const decrement = (_id) => {
    const itemIndex = cart.findIndex((item) => item._id === _id);
    if (itemIndex >= 0 && cart[itemIndex].quantity === 1) {
      removeFromCart(_id);
      return;
    }

    if (itemIndex >= 0) {
      const updatedItem = {
        ...cart[itemIndex],
        quantity: cart[itemIndex].quantity - 1,
      };

      const updatedCart = [...cart];
      updatedCart[itemIndex] = updatedItem;
      setCart(updatedCart);
    }
  };

  const calculateSubTotal = () => {
    let total = 0;

    for (const item of cart) {
      const itemTotal = item.productPrice * item.quantity;
      total += itemTotal;
    }

    return total;
  };

  const calculateTotal = (_shippingCharge) => {
    return calculateSubTotal() + _shippingCharge;
  };

  const context = {
    cart,
    setCart,
    handleAddToCart,
    removeFromCart,
    increment,
    decrement,
    calculateSubTotal,
    calculateTotal,
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default ContextProvider;
