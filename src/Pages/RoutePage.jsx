import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSinglePlayer } from "../data/SinglePlayerContext";
import { useSingleTeam } from "../data/SingleTeamContext";
import { IoArrowBackOutline } from "react-icons/io5";

const RoutePage = (props) => {
  const history = useHistory();

  const location = props.match.path.toString();
  const pageType = location.substring(
    location.indexOf("/") + 1,
    location.lastIndexOf("/")
  );

  let slug =
    pageType === "players"
      ? props.match.params.player
      : props.match.params.team;
  slug = parseInt(slug);

  let { getSinglePlayer, singlePlayer } = useSinglePlayer();
  let { getSingleTeam, singleTeam } = useSingleTeam();

  const data = pageType === "players" ? singlePlayer : singleTeam;

  useEffect(() => {
    if (pageType === "players") {
      getSinglePlayer(slug);
    } else {
      getSingleTeam(slug);
    }
  }, []);

  return (
    <div className="route-page">
      <div className="background-img">
        <img src={data.back_image} alt={data.name} />
      </div>
      <div className="back-button-wrapper">
        <button
          className="back"
          onClick={() => {
            history.goBack();
          }}
        >
          <IoArrowBackOutline size={25} />
        </button>
      </div>

      <div className="content">
        <div className="left-col">
          <div
            className={
              pageType === "players" ? "front-img" : "front-img team-img"
            }
          >
            <img src={data.front_image} alt={data.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;
