import React from "react";
import FeatureBox from "./featureBox";

function KeyFeatures() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto text-left text-white">
      <h2 className="text-4xl font-bold mb-4">Key Features</h2>
      <p className="text-slate-300 mb-8">
        Splitsavvy offers a range of features designed to make shared living
        easier and more enjoyable.
      </p>
      <div className="flex flex-nowrap gap-6 overflow-x-auto">
        <FeatureBox
          icon="💰"
          title="Expense Tracking"
          para="Easily track and split expenses with roommates, ensuring everyone pays their fair share."
        />
        <FeatureBox
          icon="💳"
          title="Credit Score Integration"
          para="Monitor your credit score and understand how shared expenses impact your financial health."
        />
        <FeatureBox
          icon="😊"
          title="Mood Selector"
          para="Express your mood and communicate effectively with roommates, fostering a positive living environment."
        />
        <FeatureBox
          icon="🤖"
          title="Bot Integrations"
          para="Connect with roommates through Discord, Telegram, and WhatsApp."
        />
      </div>
    </div>
  );
}

export default KeyFeatures;
