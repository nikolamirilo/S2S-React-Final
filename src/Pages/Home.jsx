import React from "react";
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
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Games />
      <CardsContainer title="Players" data={players} />
      <CardsContainer title="Teams" data={teams} />
      <Footer />
    </div>
  );
};

export default Home;
