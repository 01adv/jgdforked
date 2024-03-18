// import React from "react";
// import { FaArrowDown, FaArrowRight } from "react-icons/fa";
// import gehu from "../../assets/gehu.jpg";
// import { Link } from "react-router-dom";

// const Hero2 = () => {
//   return (
//     <section
//       id="hero1"
//       className="lg:min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative"
//       style={{
//         backgroundImage: `url(${gehu})`,
//         backgroundColor: "rgba(0, 0, 0)",
//       }}
//     >
//       <div className="max-w-screen-xl px-4 py-8 mx-auto text-center">
//         <h1 className="text-4xl animate-pulse font-bold tracking-tight from-red-600 via-orange-600 to-green-500 bg-gradient-to-b bg-clip-text text-transparent leading-none md:text-5xl xl:text-6xl dark:text-white">
//           Revolutionizing Agriculture with Cutting-Edge Solutions
//         </h1>
//         <p className="max-w-2xl mx-auto mb-8 backdrop-blur-sm lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400">
//           At Jai Gurudev Industries, we are at the forefront of innovation,
//           harnessing the power of technology to transform the agriculture
//           landscape. From state-of-the-art machinery to sustainable solutions,
//           we empower farmers to cultivate the future. Join us on the journey
//           towards a more efficient, sustainable, and bountiful harvest. Discover
//           the next era of agriculture with us - where innovation meets
//           cultivation.
//         </p>
//         <div className="flex justify-center">
//           <Link to={"/product"}>
//             <a
//               href="#"
//               className="inline-flex items-baseline justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 rounded-lg"
//             >
//               Explore Products
//               <FaArrowRight size={13} className="ml-2" />
//             </a>
//           </Link>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero2;

import React, { useState, useEffect } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import gehu from "../../assets/gehu.jpg";
import pic2 from "../../assets/hero-backg.jpg";
import wheat from "../../assets/combine.jpeg"; // Import additional images
import { Link } from "react-router-dom";

const images = [gehu, wheat]; // Array of images

const Hero2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set interval to switch images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative transition-opacity duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundColor: "rgba(0, 0, 0)",
      }}
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center">
        <h1 className="text-4xl animate-pulse font-bold tracking-tight from-red-600 via-orange-600 to-green-500 bg-gradient-to-b bg-clip-text text-transparent leading-none md:text-5xl xl:text-6xl dark:text-white">
          Revolutionizing Agriculture with Cutting-Edge Solutions
        </h1>
        <p className="max-w-2xl mx-auto mb-8 backdrop-blur-sm lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400">
          At Jai Gurudev Industries, we are at the forefront of innovation,
          harnessing the power of technology to transform the agriculture
          landscape. From state-of-the-art machinery to sustainable solutions,
          we empower farmers to cultivate the future. Join us on the journey
          towards a more efficient, sustainable, and bountiful harvest. Discover
          the next era of agriculture with us - where innovation meets
          cultivation.
        </p>
        <div className="flex justify-center">
          <Link to={"/product"}>
            <a
              href="#"
              className="inline-flex items-baseline justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 rounded-lg"
            >
              Explore Products
              <FaArrowRight size={13} className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
