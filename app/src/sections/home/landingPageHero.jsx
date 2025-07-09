import React from "react";
import Button from "@mui/material/Button";
import imageLanding from "../../assets/image_landing.png";
import { useNavigate } from "react-router-dom";

//useNavigate is used to route to different pages
function LandingHero() {
  const navigate = useNavigate();

  //forward the page to waitlist when get started button is clicked
  function HandleButtonClick() {
    navigate("/waitlist");
  }
  //Landing page hero structure
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
      <img
        src={imageLanding}
        alt="illustration"
        className="hidden md:block w-[250px] h-[375px] object-cover rounded-xl shadow-lg"
      />
      <div className="text-white flex flex-col justify-center h-[375px]">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Splitsavvy: Simplify Shared Living
        </h1>
        <p className="text-lg mb-6">
          SplitSavvy simplifies shared living by helping you track expenses,
          automate dues, and stay on top of budgets. Whether you're sharing rent
          or splitting groceries, our credit score insights and mood-based
          reminders keep everyone aligned. Sync with Discord, Telegram, or
          WhatsApp to manage bills and get alerts — all backed by smart
          automation and transparent, shared dashboards.
        </p>
        <Button
          onClick={HandleButtonClick}
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: 999,
            paddingX: 4,
            paddingY: 1.5,
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default LandingHero;
