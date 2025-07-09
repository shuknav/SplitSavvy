import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function WaitlistSuccess() {
  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header />

      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🎉 You’ve officially joined the SplitSavvy waitlist!
        </h2>
        <p className="text-slate-300 max-w-xl mb-4">
          We’ll notify you as soon as your invite is ready. In the meantime, sit
          back and relax — smarter shared living is just around the corner.
        </p>
        <p className="text-slate-300 max-w-xl mb-4">
          🕒 We review all waitlist requests every Monday, so you can expect an
          update within a week.
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

export default WaitlistSuccess;
