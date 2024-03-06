import React, { Suspense } from "react";
import { Link } from "react-router-dom/dist";
import WaIcon from "../../assets/svg/wa-icon.svg";
import { MainLoading } from "../../components/LoadingSpinner/LoadingSpinner";
const Navbar = React.lazy(() => import("../../components/Navbar/Navbar"));
const Footer = React.lazy(() => import("../../components/Footer/Footer"));
const Banner = React.lazy(() => import("../../components/Banner/Banner"));
const Skills = React.lazy(() => import("../../components/Skills/Skills"));
const Projects = React.lazy(() => import("../../components/Projects/Projects"));
const About = React.lazy(() => import("../../components/About/About"));
const Contact = React.lazy(() => import("../../components/Contact/Contact"));

const Home = () => {
  return (
    <Suspense fallback={<MainLoading />}>
      <Link to="https://wa.me/+919633063113">
        <img
          src={WaIcon}
          alt=""
          className="w-[4rem] sm:w-[5rem] block cursor-pointer fixed right-[1rem] bottom-[4rem] md:right-[3rem] md:bottom-[7rem] z-30 animate-bounce hover:animate-none transition-all duration-300 ease-out"
        />
      </Link>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Suspense>
  );
};

export default Home;
