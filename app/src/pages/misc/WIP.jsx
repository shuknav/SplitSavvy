import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img_building from "../../assets/img_building.png";
import { useLocation } from "react-router-dom";

function WIP() {
  const { state } = useLocation();
  const { status } = state || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (status == false) {
      navigate("/login");
    }
  }, []);

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

export default WIP;
