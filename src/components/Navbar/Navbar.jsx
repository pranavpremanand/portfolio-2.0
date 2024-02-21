import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const links = [
  { title: "Home", link: "banner" },
  { title: "About", link: "" },
  { title: "Skills", link: "" },
  { title: "Projects", link: "" },
  { title: "Contact", link: "" },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="h-[10vh] lg:h-[12vh] sticky top-0 z-20 text-black left-0 bg-white flex justify-end items-center shadow-md">
      <div className="flex w-[100%] justify-between items-center h-[100%] px-12">
        <Link className="text-black font-semibold text-xl cursor-pointer">
          {/* Pranav.dev */}
        </Link>
        <div className="hidden lg:flex gap-10">
          {links.map(({ title, link }, i) => (
            <Link
              key={i}
              className="cursor-pointer hover:text-sky-600 font-medium transition-colors duration-300"
              to={link}
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
      <div className="block lg:hidden mr-8">
        <Hamburger
          color="black"
          size="23"
          toggled={isOpen}
          rounded
          toggle={setOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;
