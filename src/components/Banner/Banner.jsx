import React from "react";
import myImg from "../../assets/images/me1.jpg";
import handImg from "../../assets/images/waving hand.png";
import { FiGithub, FiLinkedin,FiInstagram,FiMail   } from "react-icons/fi";
import { Link } from "react-router-dom";
import htmlImg from '../../assets/images/html.png'
import cssImg from '../../assets/images/css.png'
import reactImg from '../../assets/images/react.png'
import jsImg from '../../assets/images/javascript.png'
import reduxImg from '../../assets/images/redux.png'
import tailwindImg from '../../assets/images/tailwind.png'
import muiImg from '../../assets/images/MUI.png'
import bootstrapImg from '../../assets/images/bootstrap.png'
import sassImg from '../../assets/images/sass.png'
import nodeImg from '../../assets/images/node.png'
import expressImg from '../../assets/images/expressjs.png'
import mongoDbImg from '../../assets/images/mongodb.png'

const socialLinks = [
  { icon: FiGithub, link: "https://github.com/pranavpremanand" },
  { icon: FiLinkedin, link: "https://linkedin.com/in/pranavpremanand" },
  { icon: FiInstagram , link: "https://instagram.com/pranav_premanand" },
  { icon: FiMail    , link: "mailto:mpranavprem@gmail.com" },
];

const Banner = () => {
  return (
    <div className="h-[85vh] sm:h-auto lg:min-h-[88vh] flex items-center justify-center bg-[#f9f9f9] p-7 sm:p-10">
      <div className="max-w-[70rem]">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-8">
            <span className="text-center lg:text-start text-[3rem] leading-[3rem] sm:leading-[4.2rem] font-bold text-[#2d2e32]">
              Software Developer
              <img
                src={handImg}
                alt="Waving Hand"
                className="w-[3.2rem] inline-block ml-1 sm:ml-5 -mt-2"
              />
            </span>
            <p className="text-[#555] text-center lg:text-start">
              Hey, I'm Pranav. A passionate Software Developer based in Kerala,
              India.📍
            </p>
            <div className="flex text-[1.5rem] gap-4 justify-center lg:justify-start">
              {socialLinks.map((item) => (
                <Link to={item.link}>
                  <item.icon className="text-[#2d2e32] hover:text-sky-600 transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>
          {/* <img
            src={myImg}
            alt="Hero"
            className="w-[22rem] object-cover aspect-square rounded-full"
          /> */}
          <div
          className="hero-img w-[19rem] h-[19rem] sm:w-[25rem] sm:h-[25rem]"
          style={{ backgroundImage: `url(${myImg})` }}
        ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
