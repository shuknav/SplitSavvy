import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WaitlistForm from "./WaitlistForm";
import { useNavigate } from "react-router-dom";
import { addToWaitlist } from "../../api/waitlist";

function Waitlist() {
  const navigate = useNavigate();
  async function handleWaitlistSubmit(firstName, lastName, email) {
    //button responsible for validating email and adding user to waitlist
    try {
      const res = await addToWaitlist(firstName, lastName, email);
      if (!res.success) {
        if (res.message === "User exists") {
          navigate("/message", {
            state: {
              type: "user",
            },
          });
        } else if (res.message === "Already waitlisted") {
          navigate("/message", {
            state: {
              type: "already",
            },
          });
        }
      }
      if (res.success && res.message === "Waitlisted") {
        navigate("/message", {
          state: {
            type: "success",
          },
        });
      }
    } catch (err) {
      console.log("error", err);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#101a23] text-white">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the Waitlist
        </h2>
        <p className="text-slate-300 max-w-xl mb-8">
          Be among the first to simplify shared living with SplitSavvy — from
          tracking expenses to syncing moods and managing payments, all in one
          smart, shared dashboard.
        </p>
        <WaitlistForm onSubmit={handleWaitlistSubmit} />
      </main>
      <Footer />
    </div>
  );
}

export default Waitlist;
