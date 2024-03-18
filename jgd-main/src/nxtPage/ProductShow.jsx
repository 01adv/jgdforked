import React, { useEffect, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Button from "../components/button/Button";

const serverIP = import.meta.env.VITE_SERVER;

const ProductShow = ({ name, productImages, tags, category, description }) => {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    // Set the default main image after the component mounts
    if (mainImage === null && productImages?.length > 1) {
      setMainImage(`${serverIP}/${productImages[0]}`);
    }
  }, [mainImage, productImages]);

  const changeMainImage = (image) => {
    setMainImage(`${serverIP}/${image}`);
  };

  return (
    <div className="container py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row -mx-4">
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
                        mainImage === `${serverIP}/${image}`
                          ? "ring-2 ring-primary-300 ring-inset"
                          : ""
                      }`}
                    >
                      <img
                        src={`${serverIP}/${image}`}
                        alt={`Thumbnail ${image + 1}`}
                        className="h-full w-full object-cover rounded-lg hover:scale-105"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:flex-1 px-4">
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {name}
              </h2>
              <p className="text-lime-500 text-sm">{category}</p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <h1>{tags}</h1>
                  </div>
                </div>
              </div>

              <p className="text-gray-500">{description}</p>

              <div className="flex py-4 space-x-4">
                {/* <Button
                  text={"Enquiry"}
                  link={"/"}
                  buttonSize={"p-3"}
                  arrow={<FaArrowRight size={14} />}
                /> */}
                <div className=" bg-orange-600 rounded-lg hover:bg-orange-600/50">
                  <a
                    href={`mailto:your-email@example.com?subject=Regarding%20Your%20Product%20${encodeURIComponent(
                      name
                    )}&body=Dear%20Seller,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20product%20${encodeURIComponent(
                      name
                    )}.%20Please%20provide%20me%20with%20further%20details.%0D%0A%0D%0AThank%20you.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]%0D%0A%0D%0APlease note that you are free to modify this email according to your needs.`}
                  >
                    <h1 className="text-nowrap font-semibold flex flex-1 text-white items-center p-3 gap-2">
                      Enquiry
                      <FaArrowRight size={14} />
                    </h1>
                  </a>
                </div>
                <Button
                  text={"Brochure"}
                  link={"/"}
                  buttonSize={"p-3"}
                  arrow={<FaDownload />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
