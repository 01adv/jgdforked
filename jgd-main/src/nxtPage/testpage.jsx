import React, { useState, useEffect } from "react";

const serverIP = import.meta.env.VITE_SERVER;

const ProductPage = ({ productImages }) => {
  const [mainImage, setMainImage] = useState(null);

  // Use useEffect to set the default main image after the component mounts
  useEffect(() => {
    if (!mainImage && productImages?.length > 1) {
      setMainImage(`${serverIP}/${productImages[1]}`);
    }
  }, [mainImage, productImages]);

  const changeMainImage = (image) => {
    setMainImage(`${serverIP}/${image}`);
  };

  return (
    <div className="md:flex-1 px-4">
      <div>
        <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
          {productImages?.map((image) => (
            <div
              key={image}
              className={`${
                mainImage === `${serverIP}/${image}`
                  ? "h-64 md:h-80 rounded-lg mb-4 flex items-center justify-center ring-2 ring-primary-300 ring-inset"
                  : "hidden"
              }`}
            >
              <img
                src={`${serverIP}/${image}`}
                alt={`Product Image test ${image}`}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="flex -mx-2 mb-4">
          {productImages?.map((image) => (
            <div key={image} className="flex-1 px-2">
              <button
                onClick={() => changeMainImage(image)}
                className={`focus:outline-none w-full rounded-lg h-24 md:h-30 bg-gray-100 flex items-center justify-center ${
                  mainImage === `${serverIP}/${image}` ? "ring-2 ring-primary-300 ring-inset" : ""
                }`}
              >
                <img
                  src={`${serverIP}/${image}`}
                  alt={`Thumbnail ${image + 1}`}
                  className="h-full w-full object-cover rounded-lg"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      hello
    </div>
  );
};

export default ProductPage;
