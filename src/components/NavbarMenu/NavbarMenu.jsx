import React from "react";
import "./NavbarMenu.scss";
import { IoMdClose } from "react-icons/io";
import { links } from "../Navbar/Navbar";
import { Link } from "react-scroll";

const NavbarMenu = ({ isOpen, handleClose }) => {
  const closeModal = () => {
    handleClose();
  };
  return (
    <div className={isOpen && "opened-offcanvas"}>
      <IoMdClose
        className="absolute top-8 right-12 text-3xl cursor-pointer"
        onClick={closeModal}
      />
      <div className="flex justify-center items-center flex-col gap-8 h-[100%]">
        {links.map(({ title, link }, i) => (
          <Link
            key={i}
            className="cursor-pointer text-2xl hover:text-sky-600 font-medium transition-colors duration-300"
            to={link}
            // activeClass="text-sky-600"
            spy={true}
            smooth={true}
            // offset={-100}
            offset={-80}
            duration={1000}
            onClick={closeModal}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarMenu;
