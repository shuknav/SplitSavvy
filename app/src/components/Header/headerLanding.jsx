import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#101a23] px-6 py-4 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold">Splitsavvy</div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <Button
            variant="contained"
            sx={{ textTransform: "none", borderRadius: 999, paddingX: 3 }}
          >
            Log in
          </Button>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 px-6 pt-4 pb-6 border-t border-slate-700">
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <Button
            variant="contained"
            sx={{ textTransform: "none", borderRadius: 999 }}
          >
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header;
