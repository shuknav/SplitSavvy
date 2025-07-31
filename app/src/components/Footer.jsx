import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f9fafb] text-sm text-gray-500 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Text Left */}
        <div className="text-xs text-center md:text-left w-full md:w-auto">
          © {year} SplitSavvy. All rights reserved.
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        {/* GitHub Right */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <a href="#" className="text-gray-500 hover:text-black transition">
            <GitHubIcon fontSize="medium" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
