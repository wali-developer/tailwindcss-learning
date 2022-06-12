import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="w-full bg-primary-900 py-8 px-9">
      <div className="">
        <ul>
          <li className="mb-20">
            <a href="/" className="flex justify-start items-center">
              <IoIosArrowBack className="text-3xl text-white" />
              <span className="text-white text-xl font-normal">Back</span>
            </a>
          </li>
          {[
            ["Request Submitted", "/", "01"],
            ["App fee", "/", "02"],
            ["Feasibility Report", "/", "03"],
            ["Shortcommings if any", "/", "04"],
            ["Scrutiny Committee", "/", "05"],
          ].map(([title, url, number]) => (
            <li className="mb-20 relative">
              <a href={url} className="text-gray-300 text-sm font-light">
                {title}
              </a>
              <p className="bg-gray-300 text-gray-500 w-8 h-8 flex justify-center items-center text-sm rounded-full absolute right-[-25%] top-0 cursor-pointer">
                {number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
