import React from "react";
import Button from "@mui/material/Button";
import image_hero from "../../assets/image_hero.png";
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
    <div className="w-full bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-[#111827] mb-4">
            SplitSavvy – For Roommates Who Like Peace, Not Pieces
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] mb-6">
            Track expenses. Automate reminders. Live in harmony.
          </p>
          <Button
            onClick={HandleButtonClick}
            variant="contained"
            sx={{
              backgroundColor: "#a6ead2",
              color: "#111827",
              fontWeight: 600,
              fontSize: { xs: "0.875rem", md: "1rem" },
              paddingY: "10px",
              paddingX: "24px",
              borderRadius: "8px",
              textTransform: "none",
              transition: "background-color 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "#34D399",
              },
            }}
          >
            Join Waitlist
          </Button>
        </div>
        <div className="w-full md:w-[480px] lg:w-[520px]">
          <img
            src={image_hero}
            alt="Roommates using SplitSavvy"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingHero;
