import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SlideShow } from "./SlideShow";
import { SubNav } from "./SubNav";
import { setCategory } from "../Store";
import { toggleStatusTab } from "../stores/cart"; // Import the toggleStatusTab action
import Cart from "./cart"; // Import the Cart component

// export const Header = React.memo(({ isArtDetails }) => {
export const Header = React.memo(({ isArtDetails }) => {

  const dispatch = useDispatch();
  const category = useSelector((state) => state.app.category);

  const handleCategoryChange = (newCategory) => {
    console.log("Category changed to:", newCategory); // Log category change
    dispatch(setCategory(newCategory));
  };

 
  return (
    <>
      <div id="headerDiv">
        <div>
          <div>
            <h1 >
              COLLECT AND SELL
            </h1>
          </div>

          <div>
            <h1>
              DIGITAL ARTS AT YOUR OWN PRICE
            </h1>
          </div>

        </div>

        {/* {!isArtDetails && (
          <>
            <SubNav onCategoryChange={handleCategoryChange} />
            <SlideShow />
          </>
        )} */}
      </div>
      {/* <Cart /> Add the Cart component here */}
    </>
  );
});
