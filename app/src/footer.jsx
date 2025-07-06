import React from "react";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#101a23] text-slate-300 text-sm px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-40 justify-center">
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

        <div className="flex gap-6 justify-center text-slate-400">
          <XIcon fontSize="medium" />
          <GitHubIcon fontSize="medium" />
          <InstagramIcon fontSize="medium" />
          <YouTubeIcon fontSize="medium" />
        </div>

        <div className="text-xs text-slate-400 mt-2">
          © {year} Splitsavvy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
