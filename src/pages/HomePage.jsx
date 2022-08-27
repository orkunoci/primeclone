import React from "react";
import CardSec from "../components/CardSec";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <CardSec />
      <Footer/>
    </>
  );
};

export default HomePage;
