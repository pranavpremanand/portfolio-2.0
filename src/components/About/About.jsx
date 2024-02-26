import React from "react";
import img from "../../assets/images/black-and-white-blur-gray-iphone-laptop-macbook.jpg";
import indianFlag from "../../assets/images/indian-flag.png";
import circleImg from "../../assets/images/software-dev-text.jpg";
import boyWithLapImg from "../../assets/images/boy-working-on-a-laptop.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center px-7 py-20 lg:py-32 min-h-[95vh] lg:min-h-[100vh]"
    >
      <div className="max-w-[70rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="w-fit relative mx-auto mb-5 sm:mb-0">
          <img
            src={img}
            alt=""
            className="rounded-xl lg:rounded-2xl w-[95%] sm:w-[60%] lg:w-[90%] mx-auto lg:m-0"
          />
          <div className="w-[10rem] h-[10rem] md:w-[12rem] md:h-[12rem] flex justify-center items-center absolute -bottom-12 lg:-bottom-16 right-[50%] translate-x-[50%] sm:translate-x-0 sm:right-10 lg:right-2">
            <img
              src={circleImg}
              alt=""
              className="rounded-[50%] w-[100%] h-[100%] rotate"
            />
            <img src={boyWithLapImg} alt="" className="w-[50%] absolute" />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-xl uppercase text-[#0284c7] text-center font-semibold">
            about me
          </h1>
          <h2 className="font-bold text-center lg:text-start text-[1.7rem] sm:text-3xl leading-[2.2rem]">
            Software Developer
            <br /> based in Kerala, India{" "}
            <img
              className="m-1 inline w-7"
              src={indianFlag}
              alt="Indian flag"
            />
          </h2>
          <p className="text-[#555] text-center lg:text-start">
            Hey, my name is Pranav, and I'm a Software Web Developer. I craft
            beautiful, and efficient web applications that are both
            user-friendly and responsive. I specialize in working with React,
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
