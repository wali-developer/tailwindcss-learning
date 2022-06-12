import React from "react";

const RequestHistory = () => {
  return (
    <>
      <div className="w-full px-10">
        <div className="flex justify-between py-8">
          <div className="">
            <h4 className="font-semibold text-sm text-gray-800">
              Request History
            </h4>
            <p className="font-normal text-xs text-gray-500 mt-1">
              Institute of Medical Sciences Peshawar
            </p>
          </div>
          <div className="text-xs">
            <p>
              <span>Type: </span>
              <span className="font-medium">Nursing College</span>
            </p>
            <p className="mt-1">
              <span>Request submission date: </span>
              <span className="font-medium">12/04/2022</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-10 py-8 bg-gray-100">
        <div className="px-7 py-0 bg-white rounded-3xl">
          <div className="flex justify-between items-center py-3 border-b border-gray-300">
            <div className="">
              <h4 className="font-semibold text-sm text-gray-800">
                Request Submitted
              </h4>
              <p className="font-normal text-xs text-gray-500 mt-1">
                Status:{" "}
                <span className="text-primary-900 font-medium">
                  Access granted
                </span>
              </p>
            </div>
            <div className="text-xs">
              <p className="mt-1">
                <span>submission date: </span>
                <span className="font-medium">12/04/2022</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestHistory;
