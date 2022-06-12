import React from "react";
import RequestHistory from "./components/RequestHistory";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="columns-2 flex justify-start">
      <div className="xl w-1/5">
        <Sidebar />
      </div>
      <div className="text-xl w-4/5">
        <RequestHistory />
      </div>
    </div>
  );
}

export default App;
