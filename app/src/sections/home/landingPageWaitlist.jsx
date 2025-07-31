import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Waitlist() {
  // last section of landing page for redirecting to waitlist register page
  const navigate = useNavigate();

  function HandleButtonClick() {
    navigate("/waitlist");
  }

  return (
    <div className="bg-[#e5f3ff] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#111827] mb-6">
          Ready to split smart?
        </h2>

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
    </div>
  );
}

export default Waitlist;
