import React, { useState } from "react";
import "./NavbarMenu.scss";
import { IoMdClose } from "react-icons/io";
import { links } from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const NavbarMenu = ({ isOpen, handleClose }) => {
  const [status, setStatus] = useState(isOpen);

  const closeModal = () => {
    setStatus(false);
    handleClose();
  };
  return (
    <div className={isOpen ? "opened-offcanvas" : "closed-offcanvas"}>
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
