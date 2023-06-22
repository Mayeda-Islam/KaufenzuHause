import React, { useEffect, useState } from "react";
import { createContext } from "react";
import swal from "sweetalert";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [language, setLanguage] = useState(null);
  const [verified, setVerified] = useState(false)
  const [user, setUser] = useState(null)
  const [hasUser, setHasUser] = useState({})

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (JSON.parse(loggedInUser)?.isVerified) {
      setUser(JSON.parse(loggedInUser));
      setVerified(true)
      setHasUser(true)
    }
    else {
      setUser(JSON.parse(loggedInUser));
      setVerified(false)
    }
  }, [])

  useEffect(() => {
    if (user?.email) {
      setHasUser(true)
    }
    if (user?.isVerified) {
      setVerified(true)
    }
  }, [user?.email, user?.isVerified])

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (_product, hasColor, hasSizes) => {
    if (_product?.quantity === 0) {
      swal("warning", "Please increase quantity", "warning");
      return;
    }

    if (hasColor && _product?.color === null) {
      swal("warning", "Please select a color", "warning");
      return;
    }

    if (hasSizes && _product?.size === null) {
      swal("warning", "Please select a size", "warning");
      return;
    }

    const itemIndex = cart.findIndex((item) => item._id === _product._id);

    if (itemIndex >= 0) {
      swal("warning", "The item already added to cart", "warning");
      return;
    }

    setCart([...cart, { ..._product }]);
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



  const changeLanguage = (_lang) => {
    setLanguage(_lang)
  }

  useEffect(() => {
    if (language !== null) {
      localStorage.setItem('language', JSON.stringify(language))
    }

  }, [language])
  useEffect(() => {
    const currentLanguage = localStorage.getItem("language");
    if (currentLanguage) {
      setLanguage(JSON.parse(currentLanguage))
    }
    else {
      localStorage.setItem('language', JSON.stringify('english'))
      setLanguage('english')
    }
  }, [])

  const context = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    increment,
    decrement,
    calculateSubTotal,
    calculateTotal,
    changeLanguage,
    user,
    setUser,
    hasUser,
    setHasUser,
    verified,
    language

  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default ContextProvider;
