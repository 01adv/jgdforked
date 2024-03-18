import React from "react";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt, FaRegAddressCard, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { FooterProducts, FooterUsefulLinks } from "./FooterLinks";
import SocialIconsContainer from "./SocialIcon";

// still needed some work for animation effects

const AnimatedFooter = () => {
  return (
    <footer
      id="footer"
      className={`bg-neutral-800 text-center text-gray-100 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left min-h-[100vh]`}
    >
      <div className="flex items-center justify-center border-b-2 border-gray-400 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <SocialIconsContainer />
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* <!-- TW Elements section --> */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <a href="/">
                <img
                  src={logo}
                  className="h-12 sm:h-16 hover:scale-105"
                  alt="Logo"
                />
              </a>
            </h6>
            <p>
              Empowering farmers with innovative agricultural machinery since
              1990. Explore our products and contact us today to find the
              perfect solution for your farm.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="lg:col-start-2 lg:col-end-4 ml-10">
            <FooterProducts />
          </div>
          {/* <!-- Useful links section --> */}
          <div>
            {/* Loop through the usefulLinks array */}
            <FooterUsefulLinks />{" "}
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 gap-2 flex items-center justify-center md:justify-start">
              <FaRegAddressCard />
              Rudrapur, UK 263153, BHARAT
            </p>
            <p className="mb-4 gap-2 flex items-center justify-center md:justify-start">
              <CgMail size={20} />
              info@example.com
            </p>
            <p className="mb-4 gap-2 flex items-center justify-center md:justify-start">
              <FaPhoneAlt size={20} />+ 01 234 567 88
            </p>
            <p className="mb-4 gap-2 flex items-center justify-center md:justify-start">
              <FaWhatsapp size={20} />+ 01 234 567 88
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <hr className=" h-1 bg-black" />
      <div className=" p-6 text-center dark:bg-neutral-700">
        <span className=" text-gray-100">© 2024 Copyright:</span>
        <a
          className="font-semibold text-gray-100 hover:text-primary-300 dark:text-neutral-400"
          href="/"
        >
          {" "}
          Jai Gurudev Industries
        </a>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
