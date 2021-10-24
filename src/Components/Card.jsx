import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top-content">
        <div className="background-image">
          <img
            src={props.data.front_image}
            alt={props.data.name}
            className={props.type === "team" ? "team-specific-style" : ""}
          />
        </div>
        {props.type === "player" && (
          <div className="team-image">
            <img src={props.data.team_image} alt={props.data.team} />
          </div>
        )}
        {props.type === "player" ? (
          <div className="player-position">
            <p>{props.data.position}</p>
          </div>
        ) : (
          <div
            className="team-conference"
            style={
              props.data.conference === "W"
                ? { backgroundColor: "#ff3b3b", border: "2px solid #620101" }
                : { backgroundColor: "#12bdc6", border: "2px solid #00484" }
            }
          >
            <p>{props.data.conference}</p>
          </div>
        )}
        <button className="btn-click-for-more">
          <Link
            to={
              props.type === "player"
                ? `/players/${props.data.id}`
                : `/teams/${props.data.id}`
            }
          >
            Click for more
          </Link>
        </button>
        {props.type === "player" ? (
          <div className="player-stats">
            <div className="points">
              <h3>PPG</h3>
              <p>{props.data.stat_ppg}</p>
            </div>

            <div className="rebounds">
              <h3>RPG</h3>
              <p>{props.data.stat_rpg}</p>
            </div>

            <div className="assists">
              <h3>APG</h3>
              <p>{props.data.stat_apg}</p>
            </div>
          </div>
        ) : (
          <div className="team-standing">
            <p>Standing: {props.data.standing}</p>
          </div>
        )}
      </div>
      <div className="bottom-content">
        {props.type === "player" ? (
          <h2 className="player-name">{props.data.name}</h2>
        ) : (
          <h2 className="team-name">{props.data.name}</h2>
        )}
      </div>
    </div>
  );
};

export default Card;
