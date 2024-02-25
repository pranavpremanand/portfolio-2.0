import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

export const links = [
  { title: "Home", link: "home" },
  { title: "About", link: "about" },
  { title: "Skills", link: "skills" },
  { title: "Projects", link: "projects" },
  { title: "Contact", link: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBtnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="h-[10vh] lg:h-[12vh] sticky top-0 z-20 left-0 bg-white flex justify-end items-center shadow-md">
        <div className="flex w-[100%] justify-between items-center h-[100%] px-12">
          <Link className="font-semibold text-2xl cursor-pointer">
            {"</>"}
          </Link>
          <div className="hidden lg:flex gap-10">
            {links.map(({ title, link }, i) => (
              <Link
                key={i}
                className="cursor-pointer hover:text-sky-600 font-medium transition-colors duration-300"
                to={link}
                activeClass='text-sky-600'
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
        <div className="block lg:hidden mr-8" onClick={handleBtnClick}>
          <Hamburger
            color="black"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>

      {isOpen && (
        <NavbarMenu isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
