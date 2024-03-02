import React, { useEffect, useState } from "react";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import github from "../../assets/images/github-dark.png";
import reactimage from "../../assets/images/react.png";
import node from "../../assets/images/node.png";
import javascript from "../../assets/images/javascript.png";
import tailwind from "../../assets/images/tailwind.png";
import mongodb from "../../assets/images/mongodb.png";
import bootstrap from "../../assets/images/bootstrap.png";
import express from "../../assets/images/expressjs.png";
import mui from "../../assets/images/MUI.png";
import nextjs from "../../assets/images/nextjs.png";
import redux from "../../assets/images/redux.png";
import sass from "../../assets/images/sass.png";
import postgresql from "../../assets/images/postgresql.png";
import jwt from "../../assets/images/jwt.png";
import npm from "../../assets/images/npm.png";
import reactquery from "../../assets/images/react-query.png";
import typescript from "../../assets/images/typescript.png";

const skills = [
  {
    id: 1,
    src: reactimage,
    title: "React.js",
    style: "shadow-blue-500",
  },
  {
    id: 2,
    src: javascript,
    title: "JavaScript ES6",
    style: "shadow-yellow-500",
  },
  {
    id: 3,
    src: redux,
    title: "Redux Toolkit",
    style: "shadow-purple-600",
  },
  {
    id: 99,
    src: reactquery,
    title: "React Query",
    style: "shadow-red-600",
  },
  {
    id: 7,
    src: html,
    title: "HTML5",
    style: "shadow-orange-500",
  },
  {
    id: 8,
    src: css,
    title: "CSS3",
    style: "shadow-blue-500",
  },
  {
    id: 16,
    src: sass,
    title: "SASS",
    style: "shadow-pink-700",
  },
  {
    id: 9,
    src: tailwind,
    title: "Tailwind CSS",
    style: "shadow-cyan-700",
  },
  {
    id: 10,
    src: mui,
    title: "Material UI",
    style: "shadow-blue-500",
  },
  {
    id: 11,
    src: bootstrap,
    title: "Bootstrap",
    style: "shadow-purple-400",
  },
  // {
  //   id: 17,
  //   src: nextjs,
  //   title: "Next.js",
  //   style: "shadow-slate-400",
  // },
  // {
  //   id: 16,
  //   src: typescript,
  //   title: "TypeScript",
  //   style: "shadow-blue-400",
  // },
  {
    id: 4,
    src: node,
    title: "Node.js",
    style: "shadow-green-400",
  },
  {
    id: 5,
    src: express,
    title: "Express.js",
    style: "shadow-gray-500",
  },
  {
    id: 6,
    src: mongodb,
    title: "MongoDB",
    style: "shadow-green-400",
  },
  // {
  //   id: 12,
  //   src: npm,
  //   title: "NPM",
  //   style: "shadow-red-600",
  // },
  {
    id: 14,
    src: jwt,
    title: "JSON Web Token",
    style: "shadow-blue-400",
  },
  // {
  //   id: 13,
  //   src: postgresql,
  //   title: "PostgreSQL",
  //   style: "shadow-blue-400",
  // },
  // {
  //   id: 15,
  //   src: github,
  //   title: "GitHub",
  //   style: "shadow-gray-500",
  // },
];

const Skills = () => {
  const [scaleItem, setScaleItem] = useState(0);

  useEffect(() => {
    const changeScaleItem = setInterval(() => {
      setScaleItem((prev) => (prev >= skills.length - 1 ? 0 : prev + 1));
    }, 300);

    return () => clearInterval(changeScaleItem);
  }, [scaleItem]);

  return (
    <div
      id="skills"
      className="px-7 py-14 sm:py-16 bg-[#f9f9f9] flex flex-col items-center justify-center min-h-[80vh] lg:min-h-[100vh]"
    >
      <div className="" data-aos="fade-up">
        <h1 className="text-xl uppercase text-[#0284c7] text-center font-semibold">
          Tech Stack
        </h1>
        <div className="max-w-[70rem] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 sm:gap-8 text-center py-6">
          {skills.map(({ id, src, title, style }, i) => (
            <div
              key={id}
              className={`shadow-md md:hover:scale-110 z-10 grid place-content-center bg-[#f9f9f9] h-[7.3rem] sm:h-[8.2rem] w-auto cursor-pointer duration-500 p-2 rounded-lg ${style} ${
                scaleItem === i && "scale-110"
              }`}
            >
              <img
                src={src}
                alt={title}
                className="w-[3.5rem] lg:w-[50%] rounded-sm mx-auto"
              />
              <p className="mt-2 text-[12px] overflow-hidden sm:text-base cursor-default font-medium">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
