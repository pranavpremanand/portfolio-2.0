import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills/Skills";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
