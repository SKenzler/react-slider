import React from "react";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "../App.css";

const RecordSlider = ({ imagePath }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="container">
      <img src={imagePath[imageIndex]} className="hero-image" />
      <button type="button" className="control-btn left">
        <BsFillArrowLeftCircleFill size={22} />
      </button>
      <button type="button" className="control-btn right">
        <BsFillArrowRightCircleFill size={22} />
      </button>
    </div>
  );
};

export default RecordSlider;
