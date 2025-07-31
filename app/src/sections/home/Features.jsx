import React from "react";

function Features() {
  // key features component of landing page displays divs of feature by using component FeatureBox
  return (
    <div className="bg-[#E9F6FF] py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Expense Tracking
          </h3>
          <p className="text-gray-600">
            Log shared expenses in seconds. No more spreadsheets or forgotten
            IOUs.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            UPI Reminders
          </h3>
          <p className="text-gray-600">
            Automate payment reminders with UPI integration for frictionless
            settlements.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Smart Dashboard
          </h3>
          <p className="text-gray-600">
            Get a clear overview of who owes what, ensuring everyone is on the
            same page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
