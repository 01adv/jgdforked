import React, { useEffect, useState } from "react";
import gehu from "../../assets/gehu.jpg";
import wheat from "../../assets/combine.jpeg";
import pic from "../../assets/dealer.jpg";
import { useCategoriesQuery } from "../../redux/api/ProductAPI";
import { Link } from "react-router-dom";

const server = import.meta.env.VITE_SERVER;

const Category2 = () => {
  const { data } = useCategoriesQuery("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images =
    data?.categoriesWithProducts.map((category) => ({
      photo: category.products?.[0].photos?.[0],
      categoryName: category.category,
    })) || [];

  console.log(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="h-screen max-w-7xl mx-auto">
      <div className="flex items-center justify-center h-1/6 ">
        <h1
          className="text-6xl font-bold text-gray-500 italic p-1 mb-8 sm:mb-4
        text-pretty"
        >
          Product Categories
        </h1>
      </div>
      <div className="h-5/6 p-1">
        <Link to={"/product"}>
          <div className="relative flex items-center justify-center overflow-hidden shadow-xl w-full h-full rounded-2xl">
            <img
              className="absolute w-full h-full transition-all duration-1000 ease-in-out transform bg-center bg-cover hover:scale-150"
              src={`${server}/${images[currentImageIndex]?.photo}`}
              alt="Random image"
            />
            <h2 className="absolute bg-white text-7xl tracking-widest font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-500 opacity-60 hover:scale-100">
              {images[currentImageIndex]?.categoryName}
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category2;
