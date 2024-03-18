// import React from "react";
// import tractor from "../../assets/tractor.svg";
// import {
//   useAllProductsQuery,
//   useCategoriesQuery,
// } from "../../redux/api/ProductAPI";

// // {`${serverIP}/${product.photos[0]}`}
// const serverIP = import.meta.env.VITE_SERVER;

// const categories = [
//   { id: 1, name: "Category" },
//   { id: 2, name: "Category 2" },
//   { id: 3, name: "Category 3" },
//   { id: 4, name: "Category 4" },
//   { id: 5, name: "Category 5" },
//   { id: 6, name: "Category 6" },
//   // Add more categories as needed
// ];

// const Category = () => {
//   const { data } = useCategoriesQuery("");
//   // const {data} = useAllProductsQuery("")
//   // console.log(data);

// const catNam = data?.categoriesWithProducts
// console.log(catNam);

// // i.products?.[0].photos?.[0]
//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto py-10 flex flex-col items-center justify-center">
//         <div className="mb-2 text-center">
//           <h1 className="max-w-2xl mb-2 text-3xl text-gray-800 font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
//             Explore by Category
//           </h1>
//         </div>
//         <div className="bg-white pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
//           {data?.categoriesWithProducts.map((i) => (
//             <div key={i.category}>
//               <div className="relative bg-white max-w-sm rounded-md mx-4 mt-8 shadow-lg md:transition-all ease-in-out duration-900 hover:scale-105 hover:text-orange-400">
//                 <img
//                   className="w-full object-cover rounded-md hover:scale-150"
//                   src={`${serverIP}/${i.products?.[0].photos?.[0]}`}
//                   alt="Random image"
//                 />
//                 {/* <div className="absolute inset-2 bg-black opacity-30 rounded-md "></div> */}
//                 <div className="absolute inset-0 flex items-end justify-center pb-2">
//                   <h2 className=" p-1 px-1 rounded-md text-3xl">
//                     {i.category}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Category;

// {
//   /* is category m dkk h small size karne p right m shift ho jataa h contect margin check karna or padding v
//    */
// }
// {
//   /* <div className="flex flex-col items-center justify-center">
//         <div className=" mb-4 text-center">
//           <h1 className="max-w-2xl text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
//             Explore by Category
//           </h1>
//         </div>
//         <div className="flex flex-wrap mx-auto flex-grow justify-center items-center bg-white dark:bg-gray-900">
//           <Card categoryName={"Rotavator"} />
//           <Card categoryName={"Combine"} />
//           <Card categoryName={"Tillage"} />
//           <Card categoryName={"Seeder"} />
//           <Card categoryName={"Harrow"} />
//           <Card categoryName={"Cultivator"} />
//         </div>
//       </div> */
// }

import React from "react";
import tractor from "../../assets/tractor.svg";
import {
  useAllProductsQuery,
  useCategoriesQuery,
} from "../../redux/api/ProductAPI";
import { Link } from "react-router-dom";

// {`${serverIP}/${product.photos[0]}`}
const serverIP = import.meta.env.VITE_SERVER;

const categories = [
  { id: 1, name: "Category" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  { id: 4, name: "Category 4" },
  { id: 5, name: "Category 5" },
  { id: 6, name: "Category 6" },
  // Add more categories as needed
];

const Category = () => {
  const { data } = useCategoriesQuery("");
  // const {data} = useAllProductsQuery("")
  // console.log(data);

  const catNam = data?.categoriesWithProducts;
  console.log(catNam);

  // i.products?.[0].photos?.[0]
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-10 flex flex-col items-center justify-center">
        <div className="mb-2 text-center">
          <h1 className="max-w-2xl mb-2 text-4xl text-gray-800 font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            Explore by Category
          </h1>
        </div>
        <div className="bg-white pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
          {data?.categoriesWithProducts.map((i) => (
            <div key={i.category}>
            <Link to={'/product'}>
              <div className="relative flex items-center justify-center m-3 overflow-hidden shadow-xl w-96 h-60 rounded-2xl">
                <img
                  className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover hover:scale-150"
                  src={`${serverIP}/${i.products?.[0].photos?.[0]}`}
                  alt="Random image"
                  />
                <h2 className=" absolute text-4xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-60 hover:scale-100">
                  {i.category}
                </h2>
                {/* <div className="absolute inset-2 bg-black opacity-30 rounded-md "></div> */}
                {/* <div className="absolute inset-0 flex items-end justify-center pb-2"></div> */}
              </div>
                  </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;

