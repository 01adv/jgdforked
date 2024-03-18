import React from "react";
import Header from "../components/navbar/header";
import Footer from "../section/footer/Footer";
import img from "../assets/combine.jpeg";
import { FaAddressCard, FaMailBulk, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div className="bg-cover bg-neutral-400 bg-center items-center text-center">
        <h1 className="text-6xl font-bold text-gray-500 p-2">Contact Us</h1>
      </div>
      <hr className=" h-3 bg-orange-400"/>

      <div className="bg-cover bg-center" 
      style={{ backgroundImage: `url(${img})` }}
      >
      <div
        className="flex flex-col lg:flex-row max-w-7xl  mx-auto"
        
      >
        {/* Left Section: Contact Information */}
        <div className="lg:w-3/5 p-4">
          <h2 className="text-3xl font-bold text-gray-600 mb-4">
            Contact Information
          </h2>
          <p className=" mb-4">
            We'd love to hear from you! Whether you have a question, want to
            learn more about our products or services, or simply want to
            connect, please don't hesitate to reach out.
          </p>
          <div className=" w-1/2">
          {/* Email */}
          <div className="flex items-center mb-4">
            <span className="mr-2">
              <FaMailBulk />
            </span>
            <p>Email: [email address removed]</p>
          </div>

          {/* Phone */}
          <div className="flex items-center mb-4">
            <span className="mr-2">
              <FaPhoneAlt />
            </span>
            <p>Phone: +1 234-567-8901</p>
          </div>

          {/* Address */}
          <div className="flex items-center mb-4">
            <span className="mr-2">
              <FaAddressCard />
            </span>
            <p>Address: 123 Main Street, Anytown, CA 12345, USA</p>
          </div></div>

          {/* Google Maps Link */}
          <div className="border p-4 mt-10 w-[80%] rounded-md transition duration-300 ease-in-out hover:border-green-500">
            <iframe
              title="Google Map"
              width="100%"
              height="300"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.480602666978!2d-122.41941548523944!3d37.774929779551586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858094a74f65d5%3A0xf703e47d1c3b7513!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1648680569808!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Right Section: Query Form */}
        <div className="lg:w-2/5 p-4">
          <h2 className="text-2xl font-bold mb-4">Feedback and Queries</h2>

          {/* Query Form */}
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-600"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-600"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border rounded-md"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactUs;
