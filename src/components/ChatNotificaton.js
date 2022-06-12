import React from "react";

const ChatNotificaton = () => {
  return (
    <div className="bg-white px-5 py-7 shadow-lg flex items-center space-x-5 max-w-sm mx-auto">
      <div className="w-10 h-10">
        <img src="images/icon2.svg" alt="chat logo" />
      </div>
      <div>
        <h4 className="font-medium text-gray-700 text-2xl">ChitChat</h4>
        <p className="font-normal text-gray-500">You have a new Message!</p>
      </div>
    </div>
  );
};

export default ChatNotificaton;
