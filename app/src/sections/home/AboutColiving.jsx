import React from "react";
import image_coliving from "../../assets/image_coliving.png";

function AboutColiving() {
  return (
    <div className="bg-[#f9fafb] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={image_coliving}
            alt="Co-living illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-4">
            Built for modern co-living.
          </h2>
          <p className="text-[#4b5563] text-base md:text-lg leading-relaxed">
            SplitSavvy is designed to fit seamlessly into your life, making
            shared living simpler and more enjoyable for everyone involved. From
            rent to groceries, we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutColiving;
