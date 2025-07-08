import React from "react";
import Header from "../components/Header/headerLanding";
import Footer from "../components/Footer/footerLanding";
import LandingHero from "../sections/home/landingPageHero";
import KeyFeatures from "../sections/home/landingPageKeyFeatures";
import Preview from "../sections/home/landingPageScreenshots";
import Waitlist from "../sections/home/landingPageWaitlist";

function Landing() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#101a23] text-white">
        <Header />
        <LandingHero />
        <KeyFeatures />
        <Preview />
        <Waitlist />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
