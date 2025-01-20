// context/AppContext.js
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <AppContext.Provider value={{ backgroundImage, setBackgroundImage, category, setCategory }}>
      {children}
    </AppContext.Provider>
  );
};
