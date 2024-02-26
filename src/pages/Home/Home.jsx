import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills/Skills";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom/dist";
import WaIcon from "../../assets/svg/wa-icon.svg";

const Home = () => {
  return (
    <>
      <Link to="https://wa.me/+919633063113">
        <img
          src={WaIcon}
          alt=""
          className="w-[4rem] sm:w-[5rem] block cursor-pointer fixed right-[1rem] bottom-[2rem] md:right-[3rem] md:bottom-[7rem] z-30 animate-bounce hover:animate-none transition-all duration-300 ease-out"
        />
      </Link>
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
