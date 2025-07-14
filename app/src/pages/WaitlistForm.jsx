import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputField from "../components/InputField";
import ButtonField from "../components/ButtonField";
import { useNavigate } from "react-router-dom";

function WaitlistForm({ onSubmit }) {
  const navigate = useNavigate();
  const [inputData, setinputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isInvalid, setIsInvalid] = useState({
    firstName: false,
    lastName: false,
    email: false,
  });

  function isValidEmail(email) {
    //function to validate email entered by user
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidFirstName(fName) {
    const trimmed = fName.trim();
    return (
      /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[' -][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(trimmed) &&
      trimmed.length >= 2 &&
      trimmed.length <= 30
    );
  }

  function isValidLastName(lName) {
    const trimmed = lName.trim();
    return (
      /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[' -][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(trimmed) &&
      trimmed.length >= 2 &&
      trimmed.length <= 30
    );
  }

  function HandleInputChange(field, value) {
    //function handles input fields change
    setinputData((prev) => ({ ...prev, [field]: value }));
    if (isInvalid[field]) {
      setIsInvalid((prev) => ({ ...prev, [field]: false }));
    }
  }

  function HandleButtonClick() {
    //button responsible for validating email and adding user to waitlist
    if (!isValidFirstName(inputData.firstName)) {
      setIsInvalid((prev) => ({ ...prev, firstName: true }));
      return;
    }
    if (!isValidLastName(inputData.lastName)) {
      setIsInvalid((prev) => ({ ...prev, lastName: true }));
      return;
    }
    if (!isValidEmail(inputData.email)) {
      setIsInvalid((prev) => ({ ...prev, email: true }));
      return;
    }
    onSubmit(inputData.firstName, inputData.lastName, inputData.email);
  }

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
        <InputField
          isInvalid={isInvalid.firstName}
          helperText={"first Name can't be empty"}
          handleChange={(val) => {
            HandleInputChange("firstName", val);
          }}
          label="First Name"
          id="fName"
          type="text"
          value={inputData.firstName}
        />
        <InputField
          isInvalid={isInvalid.lastName}
          helperText={"last Name can't be empty"}
          handleChange={(val) => {
            HandleInputChange("lastName", val);
          }}
          label="Last Name"
          id="lName"
          type="text"
          value={inputData.lastName}
        />
        <InputField
          isInvalid={isInvalid.email}
          helperText={"incorrect email"}
          handleChange={(val) => {
            HandleInputChange("email", val);
          }}
          label="Email Address"
          id="email"
          type="text"
          value={inputData.email}
        />
      </Box>
      <ButtonField text="Continue" handleClick={HandleButtonClick} />
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
    </>
  );
}

export default WaitlistForm;
