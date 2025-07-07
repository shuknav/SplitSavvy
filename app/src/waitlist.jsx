import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Waitlist() {
  return (
    <>
      <h2>Join the waitlist</h2>
      <p>
        Be the first to experience SplitSavvy's innovative features for seamless
        expense management and roomate harmony.
      </p>
      <Box sx={{ width: 500, maxWidth: "100%" }}>
        <TextField fullWidth label="Email Address" id="email-id" />
      </Box>
      <Button
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
    </>
  );
}

export default Waitlist;
