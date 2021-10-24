import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from './../Components/Hero';
import Footer from './../Components/Footer';
import Games from '../Components/Games';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Games />
      <Footer />
    </div>
  )
}

export default Home
