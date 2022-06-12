import React from "react";

const Header = () => {
  return (
    <div className="bg-indigo-700 py-20 mx-auto my-5 max-w-[1300px] rounded-2xl">
      <div className="max-w-[590px] mx-auto">
        <h1 className="text-white font-bold text-4xl text-center">
          Boost your productivity. <br /> Start using workflow today.
        </h1>
        <p className="text-gray-300 text-[20px] text-center py-4">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document.
        </p>
        <div className="text-center mt-4">
          <button className="bg-gray-50 rounded-lg px-5 py-3 text-indigo-600 font-semibold text-lg">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
