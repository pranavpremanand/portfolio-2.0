import React from "react";
import { Link } from "react-router-dom/dist";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiWhatsappFill } from "react-icons/ri";

const contactDetails = [
  {
    icon: <FaPhoneAlt />,
    iconSize: "text-2xl",
    color: "#758AA2",
    title: "Phone",
    text: "+91 9633063113",
    url: "tel:+919633063113",
  },
  {
    icon: <IoIosMail />,
    iconSize: "text-3xl",
    color: "#E44236",
    title: "Email",
    text: "mpranavprem@gmail.com",
    url: "mailto:mpranavprem@gmail.com",
  },
  {
    icon: <FaLinkedinIn />,
    iconSize: "text-3xl",
    color: "#0A79DF",
    title: "Linked In",
    text: "Pranav Premanand",
    url: "https://linkedin.com/in/pranavpremanand",
  },
  {
    icon: <TbBrandGithubFilled />,
    iconSize: "text-3xl",
    color: "#2C3335",
    title: "GitHub",
    text: "pranavpremanand",
    url: "https://github.com/pranavpremanand",
  },
  {
    icon: <RiWhatsappFill />,
    iconSize: "text-3xl",
    color: "#2ecc72",
    title: "WhatsApp",
    text: "P R A N A V",
    url: "https://wa.me/+919633063113",
  },
  {
    icon: <RiInstagramFill />,
    iconSize: "text-3xl",
    color: "#E74292",
    title: "Instagram",
    text: "pranav_premanand",
    url: "https://instagram.com/pranav_premanand",
  },
];

const Contact = () => {
  return (
    <div id="contact" className="p-7 sm:p-10 bg-[#f9f9f9]">
      <h1 className="text-xl uppercase text-[#0284c7] text-center font-semibold">
        Contact
      </h1>
      <h2 className="font-bold text-center text-[1.5rem] sm:text-[1.7rem] mt-1">
        Feel free to connect! 👇
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        <form>
          <h2 className="font-semibold text-[1.4rem] sm:text-2xl underline mb-4 sm:mb-6 text-center sm:text-start">
            Send Message
          </h2>
          <div className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 relative">
              <label
                htmlFor=""
                className="bg-[#f9f9f9] absolute -top-[0.6rem] left-2 px-1 text-[0.9rem] font-[500]"
              >
                Full Name
              </label>
              <input
                type="text"
                className="bg-[#f9f9f9] border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2"
              />
            </div>
            <div className="grid grid-cols-1 relative">
              <label
                htmlFor=""
                className="bg-[#f9f9f9] absolute -top-[0.6rem] left-2 px-1 text-[0.9rem] font-[500]"
              >
                Email
              </label>
              <input
                type="email"
                className="bg-[#f9f9f9] border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2"
              />
            </div>
            <div className="grid grid-cols-1 relative">
              <label
                htmlFor=""
                className="bg-[#f9f9f9] absolute -top-[0.6rem] left-2 px-1 text-[0.9rem] font-[500]"
              >
                Subject
              </label>
              <input
                type="text"
                className="bg-[#f9f9f9] border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2"
              />
            </div>
            <div className="grid grid-cols-1 relative">
              <label
                htmlFor=""
                className="bg-[#f9f9f9] absolute -top-[0.6rem] left-2 px-1 text-[0.9rem] font-[500]"
              >
                Message
              </label>
              <textarea
                type="text"
                rows="3"
                className="bg-[#f9f9f9] border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2"
              />
            </div>
            <button
              type="submit"
              className="bg-[#2d2e32] hover:bg-[#2F363F] hover:shadow-xl tracking-wider hover:tracking-[0.2rem] transition-all duration-500 text-white py-3 w-[100%] rounded-[0.3rem] font-[500]"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="">
          <h2 className="font-semibold text-[1.4rem] sm:text-2xl underline mb-4 sm:mb-6 text-center sm:text-start">
            Get in touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 justify-items-center sm:justify-items-start gap-6 sm:gap-4">
            {contactDetails.map((item, i) => (
              <div className="flex gap-2 items-center" key={i}>
                <Link
                  to={item.url}
                  className="flex gap-3 items-center flex-col sm:flex-row"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`p-3 bg-white rounded-[50%] shadow-xl transition-all duration-300 ease-out ${item.iconSize}`}
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>{" "}
                  <div className="flex flex-col">
                    <span className="text-center sm:text-start font-bold text-md">
                      {item.title}
                    </span>
                    <span className="text-center sm:text-start text-[#555] text-md hover:text-[#0284c7] transition-all duration-300 ease-out">
                      {item.text}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
