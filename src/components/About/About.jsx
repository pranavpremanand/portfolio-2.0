import React from "react";
import img from "../../assets/images/black-and-white-blur-gray-iphone-laptop-macbook.jpg";
import indianFlag from "../../assets/images/indian-flag.png";

const About = () => {
  return (
    <div id="about" className="flex justify-center px-10 py-20 lg:py-32">
      <div className="max-w-[70rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <img
          src={img}
          alt=""
          className="rounded-xl lg:rounded-2xl w-[90%] sm:w-[60%] lg:w-[90%] mx-auto lg:m-0"
        />
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-xl uppercase text-[#0284c7] text-center font-semibold">
            about me
          </h1>
          <h2 className="font-bold text-center lg:text-start text-[1.7rem] sm:text-3xl leading-[2.2rem]">
            Software Developer <br /> based in Kerala, India{" "}
            <img
              className="m-1 inline w-7"
              src={indianFlag}
              alt="Indian flag"
            />
          </h2>
          <p className="text-[#555] text-center lg:text-start">
            Hey, my name is Pranav, and I'm a Software Developer. I craft
            beautiful, efficient, and responsive web applications that are both
            user-friendly and scalable. I specialize in working with React,
            Node.js, Express.js and MongoDB. My expertise in these technologies
            allows me to build web applications from scratch and integrate
            different functionalities into them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
