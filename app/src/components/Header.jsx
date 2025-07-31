import React from "react";

function Header() {
  return (
    <header className="bg-[#f9fafb] px-6 py-4 text-[#1f2937] shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-[#111827]">SplitSavvy</div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-800 text-sm font-medium transition"
            onClick={(e) => e.preventDefault()}
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-800 text-sm font-medium transition"
            onClick={(e) => e.preventDefault()}
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-800 text-sm font-medium transition"
            onClick={(e) => e.preventDefault()}
          >
            Support
          </a>
        </nav>

        {/* Login Button */}
        <button
          className="bg-[#111827] hover:bg-[#1f2937] text-white font-semibold text-sm py-2 px-5 rounded-full transition ml-6"
          onClick={() => {}}
        >
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
