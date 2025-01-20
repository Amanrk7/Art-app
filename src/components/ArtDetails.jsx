// ArtDetails.jsx

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Products";

export const ArtDetails = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityMinus = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handleQuantityPlus = () => {
    setQuantity(quantity + 1);
  };

 

  if (!product) {
    return <h1>Art not found</h1>;
  }

  return (
    <div style={{ color: "#8d8d8d", display: "flex", padding: "69px 89px 22px 58px", gap: "47px" }}>
      <div style={{ boxShadow: "0px 0px 20px 4px floralwhite", width: "75%", height: "100%", borderRadius: "23px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "23px", background: "#ffffff1c", padding: "40px", borderRadius: "33px", boxShadow: "inset -3px -3px 8px 0 silver", width: "25%" }}>
        <div>
          <h1>About this piece</h1>
        </div>
        <div>
          <div>
            <button onClick={handleQuantityMinus}>-</button>
            <span>{quantity}</span>
            <button onClick={handleQuantityPlus}>+</button>
          </div>
          <button >Add to Cart</button>
        </div>
        <div>
          <h3>Description</h3>
          <h4>Title: {product.name}</h4>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;
