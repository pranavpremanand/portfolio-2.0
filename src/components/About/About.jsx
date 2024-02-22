import React from "react";
import img from "../../assets/images/black-and-white-blur-gray-iphone-laptop-macbook.jpg";
import indianFlag from '../../assets/images/indian-flag.png'

const About = () => {
  return (
    <div className="flex justify-center px-10 py-20 lg:py-32">
      <div className="max-w-[70rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
        <img
          src={img}
          alt=""
          className="rounded-2xl w-[50%] mx-auto lg:m-0 lg:w-[90%]"
        />
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-2xl capitalize text-[#147efb] text-center font-semibold">
            about me
          </h1>
          <h2 className="font-semibold text-center lg:text-start text-[1.7rem] sm:text-3xl leading-[2.2rem]">
            Software Developer <br /> based in Kerala, India <img className="m-1 inline w-7" src={indianFlag} alt="Indian flag" />
          </h2>
          <p className="text-[#555] text-center lg:text-start">
            Hey, my name is Pranav, and I'm a Software Developer. I craft dynamic frontend interfaces with backend solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
