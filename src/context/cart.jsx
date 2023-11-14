"use client";

import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART": {
      const { id } = payload;
      const productInCartIndex = state.findIndex((item) => item.id == id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        return newState;
      }

      return [
        ...state,
        {
          ...payload,
          quantity: 1,
        },
      ];
    }
    case "REMOVE_TO_CART": {
      const { id } = payload;
      const newState = state.filter((item) => item.id != id);
      return newState;
    }
    case "DELETE_CART": {
      return initialState;
    }
  }
};

export function CartProvider({ children }) {
  // Esta forma extrae la logica de actualizacion del estado global
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeToCart = (product) =>
    dispatch({
      type: "REMOVE_TO_CART",
      payload: product,
    });

  const deleteCart = () =>
    dispatch({
      type: "DELETE_CART",
    });

  /* Esta forma es la mas simple y efectiva para pequeños proyectos
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id == product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const deleteCart = () => {
    setCart([]);
  };

  const removeToCart = (product) => {
    const newCart = cart.filter((item) => item.id != product.id);
    setCart(newCart);
  };
 */
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, deleteCart, removeToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
