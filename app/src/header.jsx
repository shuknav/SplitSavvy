import React from "react";
import Button from "@mui/material/Button";

function Header() {
  return (
    <header>
      <div>Splitsavvy</div>
      <div>
        <nav>
          <div>
            <a>Features</a>
            <a>Pricing</a>
            <a>Contact</a>
            <Button variant="contained">Get Started</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
