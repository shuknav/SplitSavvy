import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function WaitlistSuccess() {
  return (
    <>
      <Header />
      <h2>🎉 You’ve officially joined the SplitSavvy waitlist!</h2>
      <p>
        We’ll notify you as soon as your invite is ready. In the meantime, sit
        back and relax — smarter shared living is just around the corner.
      </p>
      <p>
        🕒 We review all waitlist requests every Monday, so you can expect an
        update within a week.
      </p>
      <p>
        🔍 Want to track your status? Click here to see your current waitlist
        position.
      </p>
      <Footer />
    </>
  );
}

export default WaitlistSuccess;
