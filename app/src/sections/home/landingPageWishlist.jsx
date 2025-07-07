import React from "react";
import Button from "@mui/material/Button";

function Wishlist() {
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
        variant="contained"
        sx={{
          textTransform: "none",
          borderRadius: 999,
          paddingX: 4,
          paddingY: 1.5,
        }}
      >
        Join Wishlist
      </Button>
    </div>
  );
}

export default Wishlist;
