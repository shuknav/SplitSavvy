import React from "react";
import Header from "../../components/Header/headerLanding";
import Footer from "../../components/Footer/footerLanding";

function WaitlistUserNotExist() {
  //a redirected webpages for people searching the status without joining the waitlist
  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Hmm... You're Not on the Waitlist
        </h2>
        <p className="text-slate-300 max-w-xl mb-4">
          Looks like we couldn't find your email in our waitlist records. Make
          sure you entered it correctly or try signing up again.
        </p>
        <p className="text-slate-300 max-w-xl mb-4">
          Still having trouble? Reach out to us at
          [help@splitsavvy.in](mailto:help@splitsavvy.in) — we’ll be happy to
          check it for you!
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default WaitlistUserNotExist;
