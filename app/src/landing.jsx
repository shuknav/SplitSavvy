import React from "react";
import Button from "@mui/material/Button";
import Header from "./header";
import Footer from "./footer";
import imageLanding from "./assets/image_landing.png";

function Landing() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#101a23] text-white">
        <Header />
        <div>
          <h1>SplitSavvy: Simplify Shared Living</h1>
          <p>
            Effortlessly track expenses, integrate payment links, credit score
            based on due clereance and manage moods. Seemlessly connect and
            track via discord, telegram and whatsapp bots.
          </p>
          <img src={imageLanding}></img>
          <Button variant="contained">Get Started</Button>
        </div>
        <div>
          <h2>Key Features</h2>
          <p>
            SplitSavvy offers a range of features designed to make shared living
            easier and more enjoyable.
          </p>
        </div>
        <div>
          <h2>Feature Preview</h2>
          <p>
            Take a look at Splitsavvy and see how it can transform your share
            living experience.
          </p>
        </div>
        <div>
          <h2>Ready to Simplfy Your Shared Living?</h2>
          <p>
            Currently Splitsavvy is invite only join wishlist or ask the person
            using Splitsavvy to recommend you.
          </p>
          <Button variant="contained">Join Wishlist</Button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Landing;
