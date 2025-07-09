import React from "react";
import img_pageNotFound from "../assets/img_pageNotFound.png";

function PageNotFound() {
  // 404 page
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
        404 - Page Not Found
      </h1>
      <img src={img_pageNotFound} alt="illustration" />
    </div>
  );
}

export default PageNotFound;
