import React from "react";
import ArtCard from "./ArtCard";

export function Main4({ data }) {
  return (
    <div id="main1" style={{ marginBottom: "43px" }}>
      {/* ----------------1st content--------------------- */}
      <div style={{ marginBottom: "21px" }}>
        <h2>Notable Collections</h2>
      </div>

      {/* ----------------2nd content--------------------- */}
      <div id="main1Cards" style={{ display: "flex" }}>
        {data.map((item, index) => (
          <ArtCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
