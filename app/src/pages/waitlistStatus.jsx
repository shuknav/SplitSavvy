import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function WaitlistStatus() {
  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header />

      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Waitlist Status
        </h2>
        <p className="text-slate-300 max-w-xl mb-4">
          We review all waitlist requests every Monday, so you can expect an
          update within a week.
        </p>
        <p className="text-slate-300 max-w-xl mb-4">
          Here’s your current waitlist status. We’ll notify you as soon as you
          move forward in the queue.
        </p>
        <p className="text-slate-300 max-w-xl">status.</p>
      </main>

      <Footer />
    </div>
  );
}

export default WaitlistStatus;
