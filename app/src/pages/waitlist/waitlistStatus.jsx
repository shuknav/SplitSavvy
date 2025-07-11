import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { useLocation } from "react-router-dom";

function WaitlistStatus() {
  const { state } = useLocation(); //use location to get data from route navigation
  const { status, email } = state || {}; // destructuring the data and intializing as || so that it doesnt break code when users directly visits this page

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
        <p
          className={`max-w-xl font-semibold ${
            status === "pending"
              ? "text-yellow-400"
              : status === "approved"
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {status === "pending" &&
            `⏳ Hang tight, ${email}! Your request is still brewing in our system — we'll spill the tea by Monday.`}

          {status === "approved" &&
            `✅ Hey ${email}, you're officially IN! 🎉 Get ready — SplitSavvy magic is coming your way.`}

          {status === "cancelled" &&
            `❌ Uh-oh, ${email} — looks like your request hit a snag. But hey, we're always here if you want to try again. You can rejoin the waitlist after 48 hours.`}
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default WaitlistStatus;
