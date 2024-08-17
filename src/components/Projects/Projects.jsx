import React from "react";
import GoalNetImg from "../../assets/images/GoalNet-SS.png";
import githubDark from "../../assets/images/github-dark.png";
import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "GoalNet. ⚽",
      description:
        "GoalNet is a football news platform providing trending stories, transfer updates, and expert analyses. Focused on engaging fans with comprehensive coverage and exclusive insights into the world of football.",
      techStacks: [
        "Next.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Query",
        "MongoDB",
        "Vercel",
      ],
      liveLink: "https://goalnetonline.vercel.app/",
      githubLink: "https://github.com/pranavpremanand/goalnet-v1",
      image: GoalNetImg,
    },
  ];
  return (
    <div
      id="projects"
      className=" px-7 py-14 sm:py-16 flex flex-col gap-10 justify-center bg-[#f9f9f9]"
    >
      <div data-aos="fade-left" className="mx-auto">
        <h1 className="text-xl uppercase text-[#0284c7] text-center font-semibold mb-5">
          Projects
        </h1>
        <div className="wrapper mx-auto grid grid-cols-1 md:gap-12">
          {projects.map(
            (
              {
                id,
                name,
                description,
                techStacks,
                liveLink,
                githubLink,
                image,
              },
              i
            ) => (
              <div
                key={id}
                className={`flex ${
                  i % 2 === 0
                    ? "flex-col md:flex-row"
                    : "flex-col md:flex-row-reverse"
                } gap-5 md:gap-10 pb-5 pt-8 md:pt-0 md:border-b-0 ${
                  i === projects.length - 1 ? "border-b-0" : "border-b"
                }`}
              >
                <Link
                  to={liveLink}
                  className="h-[40vh] md:w-1/2 overflow-hidden rounded-2xl"
                >
                  <img src={image} alt={id} className="rounded-2xl" />
                </Link>
                <div className="md:w-1/2 flex flex-col items-center justify-evenly gap-3">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold text-center">
                      {name}
                    </h4>
                    <p className="text-gray-600 text-md text-center">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-md font-semibold">
                      <span key={i} className="text-[#15597b] text-center">
                        {techStacks.join(" - ")}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <Link
                      to={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center"
                    >
                      <span className="font-semibold">Source Code</span>
                      <img src={githubDark} alt="github" className="w-7 h-7" />
                    </Link>
                    <Link
                      to={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center"
                    >
                      <span className="font-semibold">Live Demo</span>
                      <BiLink className="text-3xl" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
