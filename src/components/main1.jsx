import React from "react";
import ArtCard from "./ArtCard";

export function Main1({ data }) {
  const { name, price, image, slug } = data;

  return (
    // <div id="main1" style={{ marginBottom: "43px" }}>
    //   {/* ----------------1st content--------------------- */}
    //   <div style={{ marginBottom: "21px" }}>
    //     <h2>Trending Today</h2>
    //   </div>

    //   {/* ----------------2nd content--------------------- */}
    //   <div id="main1Cards" style={{ display: "flex" }}>
    //     {data.map((item, index) => (
    //       <ArtCard key={index} data={item} />
    //     ))}
    //   </div>
    // </div>

    <>
      {data.map((item, index) => (
        <div id="main1">
          <ArtCard key={index} data={item} />
        </div>
      ))}
    </>
  );
}
