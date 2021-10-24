import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <div
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={() => moveSlide()}
    >
      {direction === "next" ? (
        <FaArrowCircleRight size={40} color="#eecf9a" />
      ) : (
        <FaArrowCircleLeft size={40} color="#eecf9a" />
      )}
    </div>
  );
};

export default BtnSlider;
