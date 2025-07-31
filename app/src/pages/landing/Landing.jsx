import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LandingHero from "../../sections/home/landingPageHero";
import KeyFeatures from "../../sections/home/landingPageKeyFeatures";
import AboutColiving from "../../sections/home/AboutColiving";
import Waitlist from "../../sections/home/landingPageWaitlist";

function Landing() {
  //structure of lading page made up of many different components
  return (
    <>
      <Header />
      <LandingHero />
      <KeyFeatures />
      <AboutColiving />
      <Waitlist />
      <Footer />
    </>
  );
}

export default Landing;
