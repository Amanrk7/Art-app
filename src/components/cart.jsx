// src/components/Cart.jsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../stores/cart"; // Import the toggleStatusTab action

const Cart = () => {
  const statusTab = useSelector((state) => state.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full transform transition-transform duration-500 ${
        statusTab ? "" : "translate-x-full"
      }`}
      style={{
        position: "absolute",
        zIndex: "999",
        backgroundColor: "#b9b9b9ab",
        height: "100vh",
        width: "31rem",
        right: "0",
        top: "0",
        color:"black", padding:"21px", borderTopLeftRadius:"23px", backdropFilter:"blur(9px)"
      }}
    >
      <div className="p-5 flex justify-between items-center">
        <h2 className="text-white text-2xl">Shopping Cart</h2>
        <button className="text-white" onClick={handleCloseTabCart}>
          X
        </button>
      </div>
      <div className="p-5">{/* Cart items will be displayed here */}</div>
    </div>
  );
};

export default Cart;
