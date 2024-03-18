import React, { useEffect, useState } from "react";
import { CgMail } from "react-icons/cg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import logo from "../../assets/logo.svg";

const Header2 = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [blurHeader, setBlurHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setBlurHeader(currentScrollPos > 100); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed z-50 w-full ${
        blurHeader ? "backdrop-blur-lg shadow-md" : ""
      } transition-opacity ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className=" flex flex-wrap justify-end pt-1 max-w-7xl mx-auto ">
        <ul className=" flex gap-4">
          <li>
            <a href="tel:+1234567890" className=" font-semibold flex">
              <span className="mr-2 align-bottom pt-1">
                <FaPhoneAlt />
              </span>{" "}
              +1 (234) 567-890
            </a>
          </li>
          <li>
            <a href="https://wa.me/1234567890" className=" font-semibold flex">
              <span>
                <FaWhatsapp size={23} />
              </span>
              +1 (234) 567-890
            </a>
          </li>
          <li>
            {" "}
            <a
              href="mailto:your-email@example.com?subject=Regarding%20Your%20Product&body=Dear%20Seller,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20product.%20Please%20provide%20me%20with%20further%20details.%0D%0A%0D%0AThank%20you.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
              className="flex gap-2 justify-center items-center"
            >
              <span>
                <CgMail size={23} />
              </span>{" "}
              jgd@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <header className=" container max-w-7xl mx-auto py-2  flex flex-wrap items-center justify-between">
        <a href="/">
          <img src={logo} alt="logo" className=" h-14" />
        </a>
        <nav>
          <ul className="flex items-center justify-center text-lg font-semibold">
            <li
              className="relative group px-3 py-2
            "
            >
              <button className=" hover:opacity-50 cursor-default">
                Products
              </button>
              <div className="absolute top-0 -left-16 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px]">
                <div className=" relative top-6 p-6 bg-white text-black rounded-xl shadow-xl w-full">
                  <div className=" w-10 h-10 -left-24 bg-blue-100 transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                  {/* <p>Products Menu</p> */}
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className=" uppercase tracking-wider text-gray-500 font-medium text-sm">
                          The Suite
                        </p>
                        <ul className="mt-3 text-sm">
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Course Editor
                              <p className=" text-gray-500 font-normal text-base ">
                                All-in-one-editor
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Accept Payments
                              <p className=" text-gray-500 font-normal text-base ">
                                Pre-build Payments page
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Closed Captioning
                              <p className=" text-gray-500 font-normal text-base ">
                                Use Ai to generate captions
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className=" uppercase tracking-wider text-gray-500 font-medium text-sm">
                          Extensions
                        </p>
                        <ul className="mt-3 text-sm">
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Plugins
                              <p className=" text-gray-500 font-normal text-base ">
                                Tweak existing functionality
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Batch Uploads
                              <p className=" text-gray-500 font-normal text-base ">
                                Get Your time back
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Social Sharing
                              <p className=" text-gray-500 font-normal text-base ">
                                Use whatever data you want to display
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li
              className="relative group px-3 py-2
            "
            >
              <button className=" hover:opacity-50 cursor-default">
                Contact
              </button>
              <div className="absolute  top-0 left-0 transition"></div>
            </li>

            <li
              className="relative group px-3 py-2
            "
            >
              <button className=" hover:opacity-50 cursor-default">
                About Us
              </button>
              <div className="absolute  top-0 left-0 transition"></div>
            </li>
            {/* <li
              className="relative group px-3 py-2
            "
            >
              <button className=" hover:opacity-50 cursor-default">
                Resources
              </button>
              <div className="absolute  top-0 left-0 transition"></div>
            </li>
            <li
              className="relative group px-3 py-2
            "
            >
              <a href="/" className=" hover:opacity-50 cursor-default">
                Pricing
              </a>
            </li> */}
          </ul>
        </nav>
        <nav>
          <ul className="flex gap-2 items-center">
            <li>
              <a
                href="#"
                className=" rounded-full  px-3 py-2 mr-4 font-semibold bg-orange-500 flex items-center group"
              >
                <span>Dealership</span>
              </a>
            </li>
            <li>
              <span className=" text-red-600">
                {" "}
                <IoLogoYoutube size={30} />{" "}
              </span>
            </li>
            <li>
              <span className=" text-orange-800">
                {" "}
                <FaInstagram size={30} />{" "}
              </span>
            </li>
            <li>
              <span className=" text-blue-600">
                {" "}
                <FaFacebook size={30} />{" "}
              </span>
            </li>
            <li>
              <span className=" text-blue-600">
                {" "}
                <FaLinkedin size={30} />{" "}
              </span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header2;
