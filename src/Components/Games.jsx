import React from "react";
import Slider from "./Slider";

const Games = (props) => {
  return (
    <div className="games-section" ref={props.section}>
      <div className="section-title">
        <h2>Games</h2>
      </div>
      <Slider />
    </div>
  );
};

export default Games;
