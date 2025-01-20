import React from "react";
import { Link } from "react-router-dom";

const ArtCard = ({ data }) => {
  const { name, price, image, slug, description } = data;

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     width: "282.5px",
    //     marginRight: "16px",
    //     height: "304px",
    //     borderRadius: "23px",
    //     backgroundColor: "rgb(32 32 32/1)",
    //   }}
    // >
    //   {/* ----------img-part-------- */}
    //   <div style={{ width: "100%", height: "-webkit-fill-available" }}>
    //     <Link to={`/art/${slug}`}>
    //       <img
    //         src={image}
    //         alt="image"
    //         style={{ width: "100%", height: "100%" }}
    //       />
    //     </Link>
    //   </div>

    //   {/* ----------info-part-------- */}
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       width: "100%",
    //       height: "52%",
    //       padding: "16px",
    //       borderRadius: "12px",
    //     }}
    //   >
    //     {/* ---seller name---- */}
    //     <div style={{ width: "100%", height: "50%" }}>{name}</div>

    //     {/* ---prices-etc- */}
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "row",
    //         width: "100%",
    //         height: "50%",
    //       }}
    //     >
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           height: "100%",
    //           width: "50%",
    //           alignItems: "flex-start",
    //         }}
    //       >
    //         <div>floor</div>
    //         <div>{price} ETH</div>
    //       </div>
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           height: "100%",
    //           width: "50%",
    //           alignItems: "flex-end",
    //         }}
    //       >
    //         <div>7 days vol</div>
    //         <div>{price} ETH</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      {/* ---------img-art-description------- */}
      <div
        id="main1-1st-content"
        style={{
          display: "flex",
          width: "30%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h3>Title: {name}</h3>
        </div>
        <div>current price: {price}</div>
        <div>
          <p>About this piece: {description}</p>
        </div>
      </div>

      {/* ---------img-art------- */}
      <div style={{ width: "50%" }}>
        <img
          src={image}
          alt="art1"
          style={{ width: "100%", borderRadius: "217px" }}
        />
      </div>

      {/* ----------buy btn-------- */}
      <div style={{ width: "20%" , display:"flex"}}>
        <div style={{width:"78%"}}>
          <input type="number" placeholder="min-value-10!!" style={{width:"100%", border:"none", background:"transparent"}}/>
        </div>
        <span class="material-symbols-outlined">arrow_outward</span>
      </div>
    </>
  );
};

export default ArtCard;
