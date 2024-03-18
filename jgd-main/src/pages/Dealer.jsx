import React from "react";
import jaigurudevImage from "../assets/dealer.jpg";
import blurcolor from "../assets/blurcolor.jpg";
import Button from "../components/button/Button";

const DealerForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div
      className="bg-black/40 bg-cover bg-center"
      // style={{ backgroundImage: `url(${blurcolor})` }}
    >
      {/* Dealer Panel Image */}
      <div className=" backdrop-blur-lg pb-8 backdrop-brightness-75">
        <div
          className="bg-cover bg-center h-40"
          style={{
            backgroundImage: `url(${jaigurudevImage})`,
            backgroundPosition: "center",
          }}
        >
          {/* You can customize the styling for the image panel */}
        </div>

        {/* Dealer Information */}
        <div className="p-8 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Become a Dealer with Jaigurudev Industries
          </h1>
          <p className="text-lg text-gray-100 mb-6">
            Join our network of dealers and be a part of Jaigurudev Industries.
            Our network across the globe is 1400 Dealers strong. Come, be a part
            of this incredible journey!
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Dealership Benefits
          </h2>
          <ul className="list-disc list-inside text-gray-100 mb-6">
            <li>
              Company's diverse range of products include 35+ categories of Farm
              Equipment for every farmer's need.
            </li>
            <li>
              Dedicated account management by our superior sales and back end
              team for managing orders.
            </li>
            <li>Excellent onsite customer service support.</li>
            <li>
              Comprehensive marketing support and marketing collaterals in
              regional languages.
            </li>
            <li>
              Stock offers/annual offers or year-end closing offers to motivate
              channel partners.
            </li>
            <li>
              Competent operations team to fulfill bulk orders with precision in
              peak season.
            </li>
            <li>Warranty support.</li>
            <li>
              Training programs and demo sessions for dealers/distributors for
              new products.
            </li>
            <li>
              Sponsorship program for plant visits and domestic & international
              exhibitions.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Why Jaigurudev Industries?
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            At Jaigurudev Industries, we provide a unique set of benefits to our
            dealers. Our commitment to quality, customer service, and
            comprehensive support sets us apart.
          </p>
        </div>

        {/* Dealer Form */}
        <div className=" bg-white/20 backdrop-blur-lg mt-5 p-8 shadow-lg max-w-2xl mx-auto">
          <h2 className="text-lg text-center text-gray-100 mb-6">
            Fill out the form below to get started on your journey with Us.
          </h2>
          {/* <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-100 text-sm font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-100 text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-100 text-sm font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-100 text-sm font-semibold mb-2"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>
            <Button text={"Submit"} type={"submit"} />
          </form> */}
          <div className=" flex justify-center items-center h-full">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScU8vOne4auKsHD0RGZ4Tdd9fMEA1jSVWbQPPvSDYbg23VhiA/viewform?usp=sf_link"
              className="bg-orange-200 p-2 rounded-xl"
            >
              Google Form Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerForm;
