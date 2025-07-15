import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { useLocation } from "react-router-dom";
import Messages from "../MessageTexts";

function Message() {
  const { state } = useLocation();
  const { type = "success", fullName = "", status = "" } = state || {};
  const content = Messages[type];

  const getStatusColor = () => {
    if (type !== "status") return "";
    if (status === "approved") return "text-green-400";
    if (status === "pending") return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {content.heading}
        </h2>

        {content.paragraphs.map((p, i) =>
          typeof p === "string" ? (
            <p key={i} className="text-slate-300 max-w-xl mb-4">
              {p}
            </p>
          ) : (
            <p key={i} className="text-slate-300 max-w-xl mb-4">
              {p.text}{" "}
              <a
                href={p.href}
                className="underline text-blue-400 hover:text-blue-500"
              >
                {p.linkText}
              </a>
              .
            </p>
          )
        )}

        {type === "status" && (
          <p className={`max-w-xl font-semibold ${getStatusColor()}`}>
            {status === "pending" &&
              `⏳ Hang tight, ${fullName}! Your request is still brewing in our system — we'll spill the tea by Monday.`}
            {status === "approved" &&
              `✅ Hey ${fullName}, you're officially IN! 🎉 Get ready — SplitSavvy magic is coming your way.`}
            {status === "cancelled" &&
              `❌ Uh-oh, ${fullName} — looks like your request hit a snag. But hey, we're always here if you want to try again. You can rejoin the waitlist after 48 hours.`}
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Message;
