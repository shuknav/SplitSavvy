import React from "react";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#101a23] text-slate-300 text-sm px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-center">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
        <div className="flex justify-center gap-6 text-slate-400">
          <a href="#">
            <XIcon fontSize="medium" />
          </a>
          <a href="#">
            <GitHubIcon fontSize="medium" />
          </a>
          <a href="#">
            <InstagramIcon fontSize="medium" />
          </a>
          <a href="#">
            <YouTubeIcon fontSize="medium" />
          </a>
        </div>
        <div className="text-xs text-slate-500 mt-2 text-center">
          © {year} Splitsavvy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
