import React from "react";
import { Link } from "react-router-dom";
import { useAllProductsQuery } from "../redux/api/ProductAPI";

const serverIP = import.meta.env.VITE_SERVER;

const ProductPage = () => {
  const { data, isLoading, isError } = useAllProductsQuery("");

  data?.products.map((i) => {
    console.log("photo", i.photos[0]);
  });

  return (
    <div className="pt-28">
      {/* Label at the top */}
      <div className="bg-gradient-to-r from-orange-100 to-green-50 h-40  flex flex-col justify-center items-center mb-4">
        <h1 className="text-3xl font-bold text-center text-orange-500 ">
          Our Products
        </h1>
      </div>

      {/* Product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl pb-8">
        {data?.products.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`} // Use the product ID in the route
            className="text-black text-decoration-none"
          >
            <div className="relative flex items-center justify-center mt-8  overflow-hidden shadow-xl w-96 h-60 rounded-2xl gap-3">
              {/* Displaying a single product photo */}
              <img
                src={`${serverIP}/${product.photos[0]}`} // Assuming the first photo in the array
                alt={product.name}
                className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover hover:scale-150"
              />
                <h2 className=" absolute text-4xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-60 hover:scale-100">
                  {product.name}
                </h2>
              {/* <div className="absolute inset-0 flex items-end bottom-4 justify-center mx-1">
              </div> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
