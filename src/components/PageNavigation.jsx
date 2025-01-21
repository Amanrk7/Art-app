import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleStatusTab } from "../stores/cart"; // Import the toggleStatusTab action
import Cart from "./cart"; // Import the Cart component
export const PageNavigation = () => {
  const handleToggleCart = () => {
    console.log("Cart button clicked!"); // Log the click event
    dispatch(toggleStatusTab());
  };

  return (
    <>
      <header
        id="headerTag"
        style={{
          width: "70%",
          alignItems: "center",
          marginTop: "-1px",
          height: "3em",
          borderBottom: ".9px solid #8d8d8d",
          marginBottom: "-4px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 3em",
          }}
        >
          <div style={{ marginRight: "33px" }}>
            <Link to="/" className="text-xl font-semibold">
              <h1 id="logoText" className="text-gradient cursor-pointer">
                ARTIUM HIVE
              </h1>
            </Link>
          </div>

          <div
            style={{
              justifyContent: "flex-end",
              paddingLeft: "15px",
            }}
          >
            <nav id="nav" style={{ padding: "2px" }}>
              {/* <button id="drops"> */}
              <Link to="buy" className="text-xl font-semibold">
                Buy
              </Link>
              {/* </button> */}
              {/* <button id="explore"> */}
              <Link to="sell" className="text-xl font-semibold">
                Sell
              </Link>
              {/* </button> */}
              {/* <button id="create"> */}
              <Link to="support" className="text-xl font-semibold">
                Support
              </Link>
              {/* </button> */}
              {/* <button id="create"> */}
              <Link to="about" className="text-xl font-semibold">
                About Us
              </Link>
              {/* </button> */}
            </nav>
          </div>

          <div
            style={{
              width: "38%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {/* <button id="login">Login</button> */}
            <Link to="profile" className="text-xl font-semibold">
              <button id="profile">
                <i className="fa-regular fa-user"></i>
              </button>
            </Link>

            <button id="cart" onClick={handleToggleCart}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>

        {/* <div
          id="input-div"
          style={{
            width: "27%",
            display: "flex",
            justifyContent: "flex-start",
            lineHeight: "26px",
            padding: "8px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "transparent",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            color: "rgb(255, 255, 255)",
            backdropFilter: "blur(20px)",
            alignItems: "center",
            borderRadius: "18px",
            height: "2.4em",
          }}
        >
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="search here..."
              style={{ background: "none", border: "none", width: "100%" }}
            />
          </div>
        </div> */}
      </header>
    </>
  );
};
