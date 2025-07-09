import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import Header from "../components/Header/headerLanding";
import Footer from "../components/Footer/footerLanding";
import { checkInWaitlist } from "../api/waitlist";
import { useNavigate } from "react-router-dom";

function WaitlistCheck() {
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();

  function HandleEmailChange(event) {
    const emailInputField = event.target.value;
    setEmail(emailInputField);
    if (isInvalid) setIsInvalid(false);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function HandleButtonClick() {
    if (!isValidEmail(email)) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);
    try {
      const data = await checkInWaitlist(email);
      if (data.status == "user_exists") {
        navigate("/waitlistuserexist");
      } else if (data.status == "not_exists") {
        navigate("/waitlistusernotexist");
      } else {
        navigate("/waitliststatus", { state: { status: data, email } });
      }
    } catch (err) {
      console.log("error", err);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#101a23] text-white">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Check the Status
        </h2>
        <p className="text-slate-300 max-w-xl mb-8">
          Enter your email to see your current position on the waitlist or check
          the status of your invitation..
        </p>
        <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
          <TextField
            error={isInvalid}
            helperText={isInvalid ? "Please enter a valid email address" : ""}
            value={email}
            onChange={HandleEmailChange}
            fullWidth
            label="Email address"
            id="email-id"
            variant="outlined"
            InputProps={{
              style: {
                backgroundColor: "#1f2a35",
                color: "white",
                borderRadius: 999,
              },
            }}
            InputLabelProps={{
              style: {
                color: isInvalid ? "#f44336" : "rgba(255, 255, 255, 0.6)",
              },
            }}
          />
        </Box>
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
          Check Status
        </Button>
      </main>
      <Footer />
    </div>
  );
}

export default WaitlistCheck;
