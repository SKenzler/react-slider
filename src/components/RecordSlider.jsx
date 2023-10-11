import React from "react";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "../App.css";

const RecordSlider = ({ imagePath }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const displayNextSlide = () => {
    setImageIndex((index) => {
      if (index === imagePath.length - 1) return 0;
      return index + 1;
    });
  };
  const displayPrevSlide = () => {
    setImageIndex((index) => {
      if (index === 0) return imagePath.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="container">
      <img src={imagePath[imageIndex]} className="hero-image" />
      <button
        type="button"
        className="control-btn left"
        onClick={displayPrevSlide}
      >
        <BsFillArrowLeftCircleFill size={22} />
      </button>
      <button
        type="button"
        className="control-btn right"
        onClick={displayNextSlide}
      >
        <BsFillArrowRightCircleFill size={22} />
      </button>
    </div>
  );
};

export default RecordSlider;
