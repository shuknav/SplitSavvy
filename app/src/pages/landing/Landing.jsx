import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LandingHero from "../../sections/home/landingPageHero";
import KeyFeatures from "../../sections/home/landingPageKeyFeatures";
import Preview from "../../sections/home/landingPageScreenshots";
import Waitlist from "../../sections/home/landingPageWaitlist";

function Landing() {
  //structure of lading page made up of many different components
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
