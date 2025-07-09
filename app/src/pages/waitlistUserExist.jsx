import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function WaitlistUser() {
  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          You’re already a verified SplitSavvy user!
        </h2>
        <p className="text-slate-300 max-w-xl mb-4">
          It looks like you've already completed the onboarding. You can log in
          directly and start using all the features of SplitSavvy.
        </p>
        <p className="text-slate-300 max-w-xl mb-4">
          Think we made a mistake? Reach out to us at{" "}
          <a
            href="mailto:support@splitsavvy.com"
            className="underline text-blue-400 hover:text-blue-500"
          >
            support@splitsavvy.com
          </a>
          .
        </p>
        <p className="text-slate-300 max-w-xl">
          👤 Already a user?{" "}
          <a
            href="/login"
            className="underline text-blue-400 hover:text-blue-500"
          >
            Log in here
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default WaitlistUser;
