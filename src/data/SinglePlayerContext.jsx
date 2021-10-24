import React, { useState, useContext } from "react";
import database from "../database.json";

const SinglePlayerContext = React.createContext();

export const useSinglePlayer = () => {
  return useContext(database.teams);
};

export const SinglePlayerProvider = ({ children }) => {
  const players = database.players;
  const [singlePlayer, setSinglePlayer] = useState({});

  const getSinglePlayer = (id) => {
    players.map((player) => player.id === id && setSinglePlayer(player));
  };

  return (
    <SinglePlayerContext.Provider value={{ getSinglePlayer, singlePlayer }}>
      {children}
    </SinglePlayerContext.Provider>
  );
};
