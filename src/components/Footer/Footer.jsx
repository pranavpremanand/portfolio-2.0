import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Link } from "react-router-dom/dist";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com/in/pranavpremanand",
  },
  {
    icon: <TbBrandGithubFilled />,
    url: "https://github.com/pranavpremanand",
  },
  {
    icon: <RiWhatsappFill />,
    url: "https://wa.me/+919633063113",
  },
];

const Footer = () => {
  return (
    <div className="p-7 sm:p-10 bg-[#2d2e32] flex flex-col sm:flex-row items-center justify-between gap-5">
      <small className="text-white">
        Copyright © 2024. All rights are reserved
      </small>
      <div className="flex gap-2">
        {socialLinks.map((item, i) => (
          <Link
            key={i}
            to={item.url}
            className="flex gap-3 items-center flex-col sm:flex-row text-[#f1f1f1] text-3xl hover:text-sky-600 transition-colors duration-300 ease-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
