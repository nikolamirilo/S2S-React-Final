import React, { useState, useContext } from "react";
import database from "../database.json";

const SingleTeamContext = React.createContext();

export const useSingleTeam = () => {
  return useContext(SingleTeamContext);
};

export const SingleTeamProvider = ({ children }) => {
  const teams = database.teams;
  const [singleTeam, setSingleTeam] = useState({});

  const getSingleTeam = (id) => {
    teams.map((team) => team.id === id && setSingleTeam(team));
  };

  return (
    <SingleTeamContext.Provider value={{ singleTeam, getSingleTeam }}>
      {children}
    </SingleTeamContext.Provider>
  );
};
