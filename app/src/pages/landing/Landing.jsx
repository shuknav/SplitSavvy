import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../sections/home/Hero";
import Features from "../../sections/home/Features";
import JoinWaitlist from "../../sections/home/JoinWaitlist";
import AboutColiving from "../../sections/home/AboutColiving";

function Landing() {
  //structure of lading page made up of many different components
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <AboutColiving />
      <JoinWaitlist />
      <Footer />
    </>
  );
}

export default Landing;
