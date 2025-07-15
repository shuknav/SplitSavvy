import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";
import Header from "../../components/Header/headerLanding";
import Footer from "../../components/Footer/footerLanding";
import { checkInWaitlist } from "../../api/waitlist";
import { useNavigate } from "react-router-dom";

function WaitlistCheck() {
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();

  function HandleEmailChange(val) {
    //function to handle input field changes
    setEmail(val);
    if (isInvalid) setIsInvalid(false);
  }

  function isValidEmail(email) {
    //function to validate user input email address
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function HandleButtonClick() {
    //button responsible for validation and checking the status of the people in waitlist
    if (!isValidEmail(email)) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);
    try {
      const data = await checkInWaitlist(email);
      if (data.status == "user_exists") {
        navigate("/message", {
          state: {
            type: "user",
          },
        });
      } else if (data.status == "not_exists") {
        navigate("/message", {
          state: {
            type: "notfound",
          },
        });
      } else {
        navigate("/message", {
          state: {
            type: "status",
            fullName: data.name,
            status: data.status,
          },
        });
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
          <InputField
            label={"Email address"}
            id={"email-id"}
            type={"text"}
            isInvalid={isInvalid}
            helperText={"Please enter a valid email address"}
            value={email}
            handleChange={(val) => {
              HandleEmailChange(val);
            }}
          />
        </Box>
        <ButtonField text={"Check Status"} handleClick={HandleButtonClick} />
      </main>
      <Footer />
    </div>
  );
}

export default WaitlistCheck;
