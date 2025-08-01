import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { isEmpty, isValidEmail } from "../../utils/validation";
import { checkInWaitlist } from "../../api/waitlist";
import { useNavigate } from "react-router-dom";

function WaitlistCheck() {
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleEmailChange(val) {
    //function to handle input field changes
    setEmail(val);
    if (isInvalid) setIsInvalid(false);
  }

  async function handleButtonClick() {
    //button responsible for validation and checking the status of the people in waitlist
    if (isEmpty(email)) {
      setIsInvalid(true);
      setHelperText("Email can't be empty");
      return;
    }
    if (!isValidEmail(email)) {
      setIsInvalid(true);
      setHelperText("Enter a valid email address");
      return;
    }
    setIsInvalid(false);
    try {
      setIsLoading(true);
      const data = await checkInWaitlist(email);
      setIsLoading(false);
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
            helperText={helperText}
            value={email}
            handleChange={(val) => {
              handleEmailChange(val);
            }}
          />
        </Box>
        <ButtonField
          text={"Check Status"}
          handleClick={handleButtonClick}
          loading={isLoading}
        />
      </main>
      <Footer />
    </div>
  );
}

export default WaitlistCheck;
