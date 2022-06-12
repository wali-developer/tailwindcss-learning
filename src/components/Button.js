import React from "react";

const Button = ({ btnText }) => {
  return (
    <div className="bg-blue-500 px-4 py-2 rounded shadow-sm max-w-[200px] mx-auto hover:bg-blue-600 cursor-pointer text-center">
      <button className="text-lg text-gray-100">{btnText}</button>
    </div>
  );
};

export default Button;
