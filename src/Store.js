// src/Store.js

import { createStore, combineReducers } from "redux";
import cartReducer from "./stores/cart"; // Import the cart reducer

// Initial State
const initialState = {
  backgroundImage: "",
  category: "all",
};

// Actions
const SET_BACKGROUND_IMAGE = "SET_BACKGROUND_IMAGE";
const SET_CATEGORY = "SET_CATEGORY";

const setBackgroundImage = (image) => ({
  type: SET_BACKGROUND_IMAGE,
  payload: image,
});

const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

// Reducers
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND_IMAGE:
      return { ...state, backgroundImage: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer, // Combine the cart reducer
});

// Create Store
const store = createStore(rootReducer);

export { store, setBackgroundImage, setCategory };
