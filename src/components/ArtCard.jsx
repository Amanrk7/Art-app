import React from "react";
import { Link } from "react-router-dom";

const ArtCard = ({ data }) => {
  const { name, price, image, slug, description } = data;

  // Disable right-click on the entire document
  React.useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      {/* ---------img-art-description------- */}
      <div id="main1-1st-content">
        <div className="img-art-desc">
          <div>
            <h3>Title: {name}</h3>
          </div>
          <div>current price: {price}ETH</div>
          <div>
            <p>About this piece: {description}</p>
          </div>
        </div>
        {/* ----------buy btn-------- */}
        <div>
          <div>
            <input
              type="number"
              placeholder="min-value-10!!"
              style={{
                width: "100%",
                border: "none",
                background: "transparent",
                color: "#615e5e",
                fontWeight: "900",
                fontFamily: "circular",
                letterSpacing: " .3px",
              }}
            />
          </div>
          <span id="container_buy_btn" className="material-symbols-outlined">
            arrow_outward
          </span>
        </div>
      </div>

      {/* ---------img-art------- */}
      <div id="img_display_art">
        <img
          id="img_display_art_img"
          src={image}
          alt="art1"
          style={{
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            KhtmlUserSelect: "none",
            MozUserSelect: "none",
            MsUserSelect: "none",
            userSelect: "none",
            WebkitUserDrag: "none",
            userDrag: "none",
            // pointerEvents: "none",
          }}
        />
        {/* <img
          src="transparent-image.png"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            borderRadius: "217px",
            // boxShadow:"0 4px 6px 6px black",
          }}
        /> */}
      </div>
    </>
  );
};

export default ArtCard;
