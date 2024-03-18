import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../assets/logo.svg";
import Button from "../button/Button";
import Hamburger from "./Hamburger";
import Dropdown from "./dropdown/MegaMenu";
import { FaPhone, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Menu from "./dropdown/menu2";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Change the condition to scroll halfway through the hero section
      const shouldHide = currentScrollPos > window.innerHeight / 8;

      setVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 10 || !shouldHide
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header
      className={`sticky top-0 left-0 bg-black shadow-sm right-0 z-50 transition-transform duration-700 ${
        visible ? "" : " -translate-y-full"
      }`}
    >
      <nav className=" bg-white hidden lg:flex justify-end">
        <div className=" mx-32">
          <div className="flex items-center justify-end gap-6">
            <div className=" flex gap-1 items-center">
              <span className=" text-gray-400">
                <FaPhoneAlt />
              </span>
              <a
                href="tel:+1234567890"
                className="text-gray-400 font-semibold hover:text-gray-300"
              >
                +1 (234) 567-890
              </a>
            </div>
            <div className=" flex gap-1 items-center">
              <span className=" text-gray-400">
                <FaWhatsapp />
              </span>
              <a
                href="https://wa.me/1234567890"
                className="text-gray-400 font-semibold hover:text-gray-300"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* // 
      //
       */}
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-3 dark:bg-black shadow-md shadow-black/10">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex ">
            <Link to={"/"} class="flex items-center">
              <img
                src={logo}
                class="mr-3 h-12 sm:h-16 lg:h-18"
                alt="jgi logo"
              />
            </Link>
            <div className=" lg:hidden absolute top-4 right-3 sm:top-7">
              <Hamburger />
            </div>
          </div>

          <div class=" hidden lg:flex items-center lg:order-2 gap-6">
            <div className=" border-2 border-orange-500 p-1 rounded-lg text-orange-500 font-semibold text-lg shadow-lg shadow-orange-500/40 hover:bg-orange-500 hover:text-white hover:scale-90">
              <Link to={"/dealer"}>Become a Dealer</Link>
            </div>
            <div className=" border-2 border-orange-500 p-1 rounded-lg text-orange-500 font-semibold text-lg shadow-lg shadow-orange-500/40 hover:bg-orange-500 hover:text-white hover:scale-90">
              <a href="mailto:your-email@example.com?subject=Regarding%20Your%20Product&body=Dear%20Seller,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20product.%20Please%20provide%20me%20with%20further%20details.%0D%0A%0D%0AThank%20you.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]">
                Get in Touch
              </a>
            </div>
          </div>

          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-16 lg:mt-0 text-base md:text-lg">
              {/* <li>
                <div class="block py-2 pr-4 pl-3 cursor-pointer border-b  lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  {<Dropdown />}
                </div>
              </li> */}
              <li>
                <div class="block py-2 pr-4 pl-3 cursor-pointer border-b  lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  {<Menu/>}
                </div>
              </li>

              <Link to={"/about"}>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Us
                  </a>
                </li>
              </Link>
              <li>
                <Link
                  to={"/contact"}
                  class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
