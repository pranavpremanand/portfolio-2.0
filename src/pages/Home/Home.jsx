import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills/Skills";
import About from "../../components/About/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
    </>
  );
};

export default Home;
