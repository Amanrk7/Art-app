import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBackgroundImage } from "../Store";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import musicImg1 from "../assets/images/music_img1.jpg";
import musicImg2 from "../assets/images/music_img2.jpg";
import musicImg3 from "../assets/images/music_img3.jpg";
import musicImg4 from "../assets/images/music_img4.jpg";
import gameImg1 from "../assets/images/game_img1.jpg";
import gameImg2 from "../assets/images/game_img2.jpg";
import gameImg3 from "../assets/images/game_img3.jpg";
import gameImg4 from "../assets/images/game_img4.jpg";
import gameImg5 from "../assets/images/game_img5.jpg";
import artImg1 from "../assets/images/art_img1.jpg";
import artImg2 from "../assets/images/art_img2.jpg";
import artImg3 from "../assets/images/art_img3.jpg";
import artImg4 from "../assets/images/art_img4.jpg";

const images_all = [img1, img2, img3, img4, img5, img6];
const images_art = [artImg1, artImg2, artImg3, artImg4];
const images_gaming = [gameImg1, gameImg2, gameImg3, gameImg4, gameImg5];
const images_music = [musicImg1, musicImg2, musicImg3, musicImg4];

export const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const category = useSelector((state) => state.app.category);
  const dispatch = useDispatch();
  const scrollRef = useRef(null);

  const getImageArray = () => {
    switch (category) {
      case "art":
        return images_art;
      case "gaming":
        return images_gaming;
      case "music":
        return images_music;
      case "all":
      default:
        return images_all;
    }
  };

  const images = getImageArray();

  useEffect(() => {
    setCurrentIndex(0); // Reset to the first image when the category changes
  }, [category]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    if (images[currentIndex]) {
      console.log("Current Image:", images[currentIndex]); // Log current image
      dispatch(setBackgroundImage(images[currentIndex]));
    }
  }, [currentIndex, dispatch, images]);

  return (
    <div id="subSlideshowPar" style={{  height: "400px", overflow: "hidden" }}>
      <div ref={scrollRef} id="headerDiv2ndDiv" style={{ width: "100%", height: "100%" }}>
        {images.map((img, index) => (
          <div key={index} style={{ display: index === currentIndex ? "block" : "none", width: "100%", height: "100%" }}>
            <img src={img} alt={`image${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> {/* Ensure images have width and height */}
          </div>
        ))}
      </div>
    </div>
  );
};
