import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

function WaitlistAlready() {
  //redirected webpage for the users who try to re-register in the waitlist
  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          You’re Already on the List!
        </h2>
        <p className="text-slate-300 max-w-xl mb-4">
          Looks like you’ve already joined the waitlist. Your request is
          currently under review — check back soon or track your status.
        </p>
        <p className="text-slate-300 max-w-xl mb-4">
          🤔 Think we made a mistake?{" "}
          <a
            href="mailto:xyz@xyz.com"
            className="underline text-blue-400 hover:text-blue-500"
          >
            Write to us
          </a>{" "}
          and we’ll look into it.
        </p>
        <p className="text-slate-300 max-w-xl">
          🔍 Want to track your status?{" "}
          <a
            href="/waitlistcheck"
            className="underline text-blue-400 hover:text-blue-500"
          >
            Click here
          </a>{" "}
          to see your current waitlist position.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default WaitlistAlready;
