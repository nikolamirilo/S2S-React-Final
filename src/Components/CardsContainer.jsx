import React from "react";
import Card from "./Card";

const CardsContainer = (props) => {
  return (
    <div className="cards-container" ref={props.section}>
      <div className="section-title" style={{ marginTop: "2rem" }}>
        <h2>{props.title}</h2>
      </div>
      <div className="cards-wrapper">
        {props.data.map((item) => {
          return (
            <Card
              key={item.id}
              type={props.title === "Players" ? "player" : "team"}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
