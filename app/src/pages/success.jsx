import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img_building from "../assets/img_building.png";

function Success() {
  const navigate = useNavigate();
  // temporary maintenance and dashboard page
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        WEBSITE UNDER CONSTRUCTION
      </h1>
      <img src={img_building} alt="illustration" />
    </div>
  );
}

export default Success;
