import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { submitToWaitlist } from "../../api/waitlist";
import { useNavigate } from "react-router-dom";

function Waitlist() {
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();

  function isValidEmail(email) {
    //function to validate email entered by user
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function HandleEmailChange(event) {
    //function handles email input field change
    const emailInputField = event.target.value;
    setEmail(emailInputField);
    if (isInvalid) setIsInvalid(false);
  }

  async function HandleButtonClick() {
    //button responsible for validating email and adding user to waitlist
    if (!isValidEmail(email)) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);

    try {
      const data = await submitToWaitlist(email);
      console.log("success", data);
      if (data.status === "user_exists") {
        navigate("/waitlistuserexist");
      } else if (data.status === "already_waitlisted") {
        navigate("/waitlisterror");
      } else {
        navigate("/waitlistsuccess");
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
          Join the Waitlist
        </h2>
        <p className="text-slate-300 max-w-xl mb-8">
          Be among the first to simplify shared living with SplitSavvy — from
          tracking expenses to syncing moods and managing payments, all in one
          smart, shared dashboard.
        </p>
        <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
          <TextField
            // error={isInvalid}
            // helperText={isInvalid ? "Please enter a valid email address" : ""}
            // value={email}
            // onChange={HandleEmailChange}
            sx={{ mb: 2 }}
            fullWidth
            label="First Name"
            id="fName"
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
          <TextField
            // error={isInvalid}
            // helperText={isInvalid ? "Please enter a valid email address" : ""}
            // value={email}
            // onChange={HandleEmailChange}
            sx={{ mb: 2 }}
            fullWidth
            label="Last Name"
            id="lName"
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
          <TextField
            error={isInvalid}
            helperText={isInvalid ? "Please enter a valid email address" : ""}
            value={email}
            onChange={HandleEmailChange}
            sx={{ mb: 2 }}
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
          Join Waitlist
        </Button>
        <p className="text-slate-300 max-w-xl mt-6">
          Already applied?{" "}
          <a
            href="/waitlistcheck"
            className="underline text-blue-400 hover:text-blue-500"
          >
            Click here
          </a>{" "}
          to check your current status.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default Waitlist;
