import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Waitlist() {
  const navigate = useNavigate();

  function HandleButtonClick() {
    navigate("/waitlist");
  }

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto text-left text-white">
      <h2 className="text-4xl font-bold mb-4">
        Ready to Simplify Your Shared Living?
      </h2>
      <p className="text-slate-300 mb-10 max-w-2xl">
        SplitSavvy is currently invite-only. Join the wishlist or get a referral
        from someone already using the platform to access early.
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
        Join Waitlist
      </Button>
    </div>
  );
}

export default Waitlist;
