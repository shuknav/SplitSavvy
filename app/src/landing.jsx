import React from "react";
import Header from "./header";
import Footer from "./footer";
import LandingHero from "./landingPageHero";
import KeyFeatures from "./landingPageKeyFeatures";
import Preview from "./landingPageScreenshots";
import Wishlist from "./landingPageWishlist";

function Landing() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#101a23] text-white">
        <Header />
        <LandingHero />
        <KeyFeatures />
        <Preview />
        <Wishlist />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
