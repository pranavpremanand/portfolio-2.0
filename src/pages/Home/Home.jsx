import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills/Skills";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom/dist";

const Home = () => {
  return (
    <>
      <Link to="https://wa.me/+919633063113">
        <IoLogoWhatsapp className="wa-icon hidden xl:block text-green-500 hover:scale-125 transition-all duration-300 cursor-pointer text-6xl fixed right-14 bottom-28" />
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
