import React from "react";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const RecordSlider = ({ imagePath }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div>
      <img src={imagePath[imageIndex]} />
      <button type="button" className="control-btn">
        <BsFillArrowLeftCircleFill />
      </button>
      <button type="button" className="control-btn">
        <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
};

export default RecordSlider;
