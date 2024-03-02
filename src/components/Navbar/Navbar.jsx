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
      <div className="h-[5rem] sm:h-[6rem] lg:h-[12vh] fixed w-[100%] top-0 z-20 left-0 bg-white flex justify-end items-center shadow-md">
        <div className="flex w-[100%] justify-between items-center h-[100%] px-9 lg:px-12">
          <Link
            className="nav-icon font-semibold text-2xl cursor-pointer"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            {"</>"}
          </Link>
          <div className="hidden lg:flex gap-10">
            {links.map(({ title, link }, i) => (
              <Link
                key={i}
                className="nav-item bg-gradient-to-r from-sky-600 to-sky-600 link-underline  cursor-pointer hover:text-sky-600 font-medium transition-colors duration-300"
                to={link}
                activeClass="text-sky-600 nav-item bg-gradient-to-r from-sky-600 to-sky-600 link-active-underline"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="block lg:hidden mr-7" onClick={handleBtnClick}>
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
