import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom/dist";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiWhatsappFill } from "react-icons/ri";
import { SpinnerContext } from "../Contexts/SpinnerContext";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

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
  //   {
  //     icon: <FaLinkedinIn />,
  //     iconSize: "text-3xl",
  //     color: "#0A79DF",
  //     title: "LinkedIn",
  //     text: "Pranav Premanand",
  //     url: "https://linkedin.com/in/pranavpremanand",
  //   },
  //   {
  //     icon: <TbBrandGithubFilled />,
  //     iconSize: "text-3xl",
  //     color: "#2C3335",
  //     title: "GitHub",
  //     text: "pranavpremanand",
  //     url: "https://github.com/pranavpremanand",
  //   },
  //   {
  //     icon: <RiWhatsappFill />,
  //     iconSize: "text-3xl",
  //     color: "#2ecc72",
  //     title: "WhatsApp",
  //     text: "P R A N A V",
  //     url: "https://wa.me/+919633063113",
  //   },
  //   {
  //     icon: <RiInstagramFill />,
  //     iconSize: "text-3xl",
  //     color: "#E74292",
  //     title: "Instagram",
  //     text: "pranav_premanand",
  //     url: "https://instagram.com/pranav_premanand",
  //   },
];

const Contact = () => {
  const { setIsLoading } = useContext(SpinnerContext);
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleFormSubmit = async (values) => {
    try {
      setIsLoading(true);
      const response = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );
      if (response.text === "OK") {
        toast.success("Message Sent", {
          style: {
            borderRadius: "10px",
          },
        });
        reset();
      }
    } catch (err) {
      toast.error("Something went wrong", {
        style: {
          borderRadius: "10px",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="sm:py-16 bg-[#f9f9f9] min-h-[90vh]"
    >
      <div className="px-7 py-14 max-w-[70rem] mx-auto">
        <div className="">
          <h1 className="text-xl uppercase text-[#0284c7] text-center font-semibold">
            Contact
          </h1>
          {/* <h2 className="font-bold text-center text-[1.5rem] sm:text-[1.7rem] mt-2">
          Feel free to connect! 👇
        </h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
            <form
              ref={form}
              onSubmit={handleSubmit(handleFormSubmit)}
              data-aos="fade-right"
              data-aos-offset="-150"
            >
              <h2 className="font-semibold text-[1.4rem] sm:text-2xl underline mb-4 sm:mb-6 text-center sm:text-start">
                Send Message
              </h2>
              <div className="grid grid-cols-1 gap-4">
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
                    {...register("fullName", {
                      required: "Full name is required",
                      validate: (val) => {
                        if (val.trim() !== "") {
                          return true;
                        } else {
                          return "Full name is required";
                        }
                      },
                    })}
                  />
                  <small className="error">{errors.fullName?.message}</small>
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
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Entered email is invalid",
                      },
                    })}
                  />
                  <small className="error">{errors.email?.message}</small>
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
                    {...register("subject", {
                      required: "Subject is required",
                      validate: (val) => {
                        if (val.trim() !== "") {
                          return true;
                        } else {
                          return "Subject is required";
                        }
                      },
                    })}
                  />
                  <small className="error">{errors.subject?.message}</small>
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
                    {...register("message", {
                      required: "Message is required",
                      validate: (val) => {
                        if (val.trim() !== "") {
                          return true;
                        } else {
                          return "Message is required";
                        }
                      },
                    })}
                  />
                  <small className="error">{errors.message?.message}</small>
                </div>
                <button
                  type="submit"
                  className="bg-[#2d2e32] hover:bg-[#2F363F] hover:shadow-xl tracking-wider hover:tracking-[0.2rem] transition-all duration-500 text-white py-3 w-[100%] rounded-[0.3rem] font-[500]"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="" data-aos="fade-left" data-aos-offset="-150">
              <h2 className="font-semibold text-[1.4rem] sm:text-2xl underline mb-4 sm:mb-6 text-center sm:text-start">
                Get in touch
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 justify-items-center sm:justify-items-start gap-4">
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
      </div>
    </div>
  );
};

export default Contact;
