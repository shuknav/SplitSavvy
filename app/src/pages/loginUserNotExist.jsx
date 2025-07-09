import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function LoginUserNotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Oops! You’re not on the list.
        </h2>
        <p className="text-slate-300 max-w-xl mb-4">
          SplitSavvy is currently invite-only. You’ll need to join the waitlist
          before you can log in.{" "}
          <a
            href="/waitlist"
            className="underline text-blue-400 hover:text-blue-500"
          >
            Join the waitlist here
          </a>
        </p>
        <p className="text-slate-300 max-w-xl mb-4">
          Entered the wrong email address?{" "}
          <a
            href="/login"
            className="underline text-blue-400 hover:text-blue-500"
          >
            Go back and try again
          </a>
        </p>
        <p className="text-slate-300 max-w-xl">
          Think we made a mistake?{" "}
          <a
            href="mailto:support@splitsavvy.in"
            className="underline text-blue-400 hover:text-blue-500"
          >
            Contact us
          </a>{" "}
          — we’ll sort it out.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default LoginUserNotFound;
