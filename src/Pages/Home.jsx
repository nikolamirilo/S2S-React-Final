import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Hero from "./../Components/Hero";
import Footer from "./../Components/Footer";
import Games from "../Components/Games";
import CardsContainer from "../Components/CardsContainer";
import { usePlayers } from "../data/PlayersContext";
import { useTeams } from "../data/TeamsContext";

const Home = () => {
  let { teams } = useTeams();
  let { players } = usePlayers();
  const gamesSection = useRef();
  const playersSection = useRef();
  const teamsSection = useRef();
  const contactSection = useRef();
  return (
    <div className="Home">
      <Navbar
        sections={[gamesSection, playersSection, teamsSection, contactSection]}
      />
      <Hero toSection={gamesSection} />
      <Games section={gamesSection} />
      <CardsContainer title="Players" data={players} section={playersSection} />
      <CardsContainer title="Teams" data={teams} section={teamsSection} />
      <Footer section={contactSection} />
    </div>
  );
};

export default Home;
