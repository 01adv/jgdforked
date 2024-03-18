// import React from "react";
// import { Link } from "react-router-dom";

// const Button = ({ text, link }) => {
//   return (
//     <>
//       <Link to={link ? link : "/"}>
//         <button class={`text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base md:text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-500 dark:hover:bg-primary-600 focus:outline-none dark:focus:ring-primary-700`}>
//           {text}
//         </button>
//       </Link>
//     </>
//   );
// };

// export default Button;

import React from "react";
import { Link } from "react-router-dom";


const Button = ({ text, link, textSize, buttonSize, type, arrow }) => {
  const buttonStyle = {
    fontSize: textSize || "md", // Default to "md" if textSize is not provided
    padding: buttonSize || "py-2", // Default to "py-2" if buttonSize is not provided
  };

  return (
    <Link to={link ? link : ""}>
      <button
        type={type ? type : ""}
        className={`text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium flex items-center gap-1 rounded-lg text-${
          textSize || "base"
        } px-4 lg:px-5 ${
          buttonStyle.padding
        } mr-2 dark:bg-primary-500 dark:hover:bg-primary-600 focus:outline-none dark:focus:ring-primary-700`}
        style={{ fontSize: buttonStyle.fontSize }}
      >
        {text} {arrow? arrow : ""}
      </button>
    </Link>
  );
};

export default Button;
