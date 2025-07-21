import React, { useState } from "react";

function Header() {
  return (
    <header className="bg-[#101a23] px-6 py-4 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold">Splitsavvy</div>
        {/* <nav className="hidden md:flex gap-8 items-center">
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav> */}
      </div>
    </header>
  );
}

export default Header;
