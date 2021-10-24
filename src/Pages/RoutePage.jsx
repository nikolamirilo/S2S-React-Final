import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSinglePlayer } from "../data/SinglePlayerContext";
import { useSingleTeam } from "../data/SingleTeamContext";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsBarChartFill } from "react-icons/bs";

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

          {pageType === "players" ? (
            <div className="player-page-stats">
              <div className="points">
                <h3>PPG</h3>
                <p>{data.stat_ppg}</p>
              </div>
              <div className="rebounds">
                <h3>RPG</h3>
                <p>{data.stat_rpg}</p>
              </div>
              <div className="assists">
                <h3>APG</h3>
                <p>{data.stat_apg}</p>
              </div>
            </div>
          ) : (
            <div className="roster">
              <ul className="player-list">
                {data.roster &&
                  data.roster.map((player) => {
                    return <li key={player.id}>{player.name}</li>;
                  })}
              </ul>
            </div>
          )}
        </div>

        <div className="right-col">
          <div className="page-title">
            <h1>{data.name}</h1>
          </div>
          <div className="page-details">
            {pageType === "players" ? (
              <>
                <div className="player-team-wrapper">
                  <img
                    className="player-team-img"
                    src={data.team_image}
                    alt={data.team}
                  />
                  <p className="player-team-name">{data.team}</p>
                </div>
                <div className="position-wrapper">
                  <div className="position-icon">
                    <p>{data.position}</p>
                  </div>
                  <p className="position-name">{data.position_name}</p>
                </div>
              </>
            ) : (
              <>
                <div className="conference-wrapper">
                  <div
                    className="team-conference-icon"
                    style={
                      data.conference === "W"
                        ? {
                            backgroundColor: "#ff3b3b",
                            border: "2px solid #620101",
                          }
                        : {
                            backgroundColor: "#12bdc6",
                            border: "2px solid #00484",
                          }
                    }
                  >
                    <p>{data.conference}</p>
                  </div>
                  <p className="conference-name">{data.conference_name}</p>
                </div>
                <div className="standing-wrapper">
                  <div className="standing-icon">
                    <BsBarChartFill size={40} color={"#f27444"} />
                  </div>
                  <p className="standing-info">{data.standing}</p>
                </div>
              </>
            )}
          </div>
          <div className="page-bio">
            <p>{data.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;
