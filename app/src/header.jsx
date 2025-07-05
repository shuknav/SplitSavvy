import React from "react";
import Button from "@mui/material/Button";

function Header() {
  return (
    <header className="bg-[#101a23] px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Splitsavvy</div>

        <nav>
          <div className="flex gap-6 items-center text-white">
            {/* ✅ These now inherit text-white cleanly */}
            <a href="#" className="hover:text-gray-300">
              Features
            </a>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
            <Button variant="contained">Get Started</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
