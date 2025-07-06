import React from "react";
import SS1 from "./assets/SS1.png";
import SS2 from "./assets/SS2.png";
import SS3 from "./assets/SS3.png";
import SS4 from "./assets/SS4.png";

function Preview() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto text-left text-white">
      <h2 className="text-4xl font-bold mb-4">SplitSavvy in Action</h2>
      <p className="text-slate-300 mb-10 max-w-2xl">
        Take a look at Splitsavvy in action and see how it can transform your
        shared living experience.
      </p>

      <div className="flex flex-nowrap gap-6 overflow-x-auto">
        {[
          {
            src: SS1,
            title: "Expense Tracking",
            para: "Easily track and split expenses with roommates, ensuring everyone pays their fair share.",
          },
          {
            src: SS2,
            title: "Credit Score Integration",
            para: "Monitor your credit score and understand how shared expenses impact your financial health.",
          },
          {
            src: SS3,
            title: "Mood Selector",
            para: "Express your mood and communicate effectively with roommates, fostering a positive living environment.",
          },
          {
            src: SS4,
            title: "Bot Integrations",
            para: "Connect with roommates through your preferred messaging platforms, including Discord, Telegram, and WhatsApp.",
          },
        ].map(({ src, title, para }) => (
          <div
            key={title}
            className="w-[260px] p-6 bg-[#101a23] border border-slate-700 rounded-lg"
          >
            <img
              src={src}
              className="rounded-xl mb-4 w-full h-[160px] object-cover"
            />

            <h3 className="font-semibold text-white text-base mb-1">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;
