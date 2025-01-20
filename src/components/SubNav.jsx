import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../Store";

export const SubNav = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.app.category);

  const handleClick = (item) => {
    console.log("SubNav clicked:", item); // Log the click event
    dispatch(setCategory(item));
  };

  const navItems = ["all", "art", "gaming", "music"];

  return (
    <div id="subNav" style={{ position: "relative", display: "flex", justifyContent: "flex-start" }}>
      {navItems.map((item) => (
        <div
          key={item}
          className={`nav-item ${category === item ? "active" : ""}`}
          onClick={() => handleClick(item)}
          style={{
            letterSpacing: "2px",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: category === item ? "rgb(125 125 125 / 7%)" : "transparent",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SubNav;
