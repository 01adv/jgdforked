import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import combine from "../../../assets/combine.jpeg";
import Button from "../../button/Button";
import { useCategoriesQuery } from "../../../redux/api/ProductAPI";

const serverIP = import.meta.env.VITE_SERVER;

const MegaMenu = () => {
  const { data } = useCategoriesQuery("");
  const categoriesWithProducts = data?.categoriesWithProducts || [];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    categoriesWithProducts.length > 0 ? categoriesWithProducts[0].category : ""
  );
  const megaMenuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Close the Mega Menu panel when clicking outside
  const handleClickOutside = (event) => {
    if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to handle clicks outside the Mega Menu
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={megaMenuRef}>
      {/* Trigger Button */}
      <div
        className={` flex focus:outline-none text-gray-500 hover:text-orange-500 focus:shadow-outline-orange ${
          isOpen ? "text-orange-500" : ""
        }`}
        onClick={handleToggle}
      >
        Products
        {isOpen ? (
          <RiArrowDropUpLine size={30} />
        ) : (
          <RiArrowDropDownLine size={30} />
        )}
      </div>

      {/* Mega Menu Panel */}
      {isOpen && (
        <div className="absolute bg-white to-green-100 top-full left-[-100px] mt-2 pl-8 border border-gray-300 shadow-lg rounded-md w-[600px] h-[500px] overflow-hidden">
          <div className="flex space-x-4 h-full pt-4">
            {/* Categories */}
            <div className="w-1/4 overflow-y-auto">
              <div className="mt-1 ml-1 mb-1 ">
                <Button
                  text="Explore"
                  link="/product"
                  textSize="md"
                  buttonSize="py-2"
                />
              </div>

              <ul>
                {categoriesWithProducts.map((categoryData) => (
                  <li
                    key={categoryData.category}
                    className={`cursor-pointer my-8 ${
                      selectedCategory === categoryData.category
                        ? "text-orange-500 font-medium"
                        : "text-gray-700"
                    }`}
                    onClick={() => handleCategoryChange(categoryData.category)}
                  >
                    {categoryData.category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="w-3/4 overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4 text-center">
                {selectedCategory}
              </h2>
              <div className="grid grid-cols-2 p-5">
                {categoriesWithProducts
                  .find((cat) => cat.category === selectedCategory)
                  ?.products.map((product) => (
                    <Link to={`/product/${product._id}`} key={product._id}>
                      <div className="items-center py-4 text-base hover:text-orange-500">
                        <img
                          src={`${serverIP}/${product?.photos?.[0]}`}
                          alt={product.name}
                          className="h-28 w-40 object-cover shadow-lg mr-4 hover:scale-105"
                        />
                        <p>{product.name}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;


// import React, { useEffect, useRef, useState } from "react";
// import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import combine from "../../../assets/combine.jpeg";
// import Button from "../../button/Button";
// import { useCategoriesQuery } from "../../../redux/api/ProductAPI";

// const serverIP = import.meta.env.VITE_SERVER;

// const MegaMenu = () => {
//   const { data } = useCategoriesQuery("");
//   const categoriesWithProducts = data?.categoriesWithProducts || [];

//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(
//     categoriesWithProducts.length > 0 ? categoriesWithProducts[0].category : ""
//   );
//   const megaMenuRef = useRef(null);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   // Close the Mega Menu panel when clicking outside
//   const handleClickOutside = (event) => {
//     if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     // Add event listener to handle clicks outside the Mega Menu
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       // Remove event listener on component unmount
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative group">
//   {/* Trigger Button */}
//   <button
//     className={`hover:opacity-50 cursor-default focus:outline-none text-gray-500 hover:text-orange-500 focus:shadow-outline-orange ${
//       isOpen ? "text-orange-500" : ""
//     }`}
//     onClick={handleToggle}
//   >
//     Products
//     {isOpen ? (
//       <RiArrowDropUpLine size={30} />
//     ) : (
//       <RiArrowDropDownLine size={30} />
//     )}
//   </button>

//   {/* Mega Menu Panel */}
//   <div className="absolute top-full left-0 bg-white border border-gray-300 shadow-lg rounded-md w-[600px] h-[500px] overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 ease-in-out transform group-hover:translate-y-1 z-50">
//     <div className="flex space-x-4 h-full pt-4">
//       {/* Categories */}
//       <div className="w-1/4 overflow-y-auto">
//         <div className="mt-1 ml-1 mb-1 ">
//           <Button
//             text="Explore"
//             link="/product"
//             textSize="md"
//             buttonSize="py-2"
//           />
//         </div>

//         <ul>
//           {categoriesWithProducts.map((categoryData) => (
//             <li
//               key={categoryData.category}
//               className={`cursor-pointer my-8 ${
//                 selectedCategory === categoryData.category
//                   ? "text-orange-500 font-medium"
//                   : "text-gray-700"
//               }`}
//               onClick={() => handleCategoryChange(categoryData.category)}
//             >
//               {categoryData.category}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Products */}
//       <div className="w-3/4 overflow-y-auto">
//         <h2 className="text-xl font-semibold mb-4 text-center">
//           {selectedCategory}
//         </h2>
//         <div className="grid grid-cols-2 p-5">
//           {categoriesWithProducts
//             .find((cat) => cat.category === selectedCategory)
//             ?.products.map((product) => (
//               <Link to={`/product/${product._id}`} key={product._id}>
//                 <div className="items-center py-4 text-base hover:text-orange-500">
//                   <img
//                     src={`${serverIP}/${product?.photos?.[0]}`}
//                     alt={product.name}
//                     className="h-28 w-40 object-cover shadow-lg mr-4 hover:scale-105"
//                   />
//                   <p>{product.name}</p>
//                 </div>
//               </Link>
//             ))}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export default MegaMenu;
