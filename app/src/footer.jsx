import React from "react";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <a>Terms of Service</a>
        <a>Privacy Policy</a>
        <a>Contact us</a>
      </div>
      <div>
        <XIcon />
        <GitHubIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
      <div>© {year} Splitsavvy. All rights reserved</div>
    </footer>
  );
}

export default Footer;
