import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";

function WaitlistForm({ onSubmit }) {
  const [loading, setLoading] = useState(false);
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

  const [helperText, setHelperText] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function CheckEmptyFirstName(firstName) {
    if (firstName == "") {
      return true;
    }
    return false;
  }

  function CheckEmptyLastName(lastName) {
    if (lastName == "") {
      return true;
    }
    return false;
  }

  function CheckEmptyEmail(email) {
    if (email == "") {
      return true;
    }
    return false;
  }

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

  async function HandleButtonClick() {
    //button responsible for validating email and adding user to waitlist
    if (CheckEmptyFirstName(inputData.firstName)) {
      setIsInvalid((prev) => ({ ...prev, firstName: true }));
      setHelperText((prev) => ({
        ...prev,
        firstName: "First name can't be empty",
      }));
      return;
    }
    if (!isValidFirstName(inputData.firstName)) {
      setIsInvalid((prev) => ({ ...prev, firstName: true }));
      setHelperText((prev) => ({
        ...prev,
        firstName: "Enter a valid first name",
      }));
      return;
    }
    if (CheckEmptyLastName(inputData.lastName)) {
      setIsInvalid((prev) => ({ ...prev, lastName: true }));
      setHelperText((prev) => ({
        ...prev,
        lastName: "Last name can't be empty",
      }));
      return;
    }
    if (!isValidLastName(inputData.lastName)) {
      setIsInvalid((prev) => ({ ...prev, lastName: true }));
      setHelperText((prev) => ({
        ...prev,
        lastName: "Enter a valid last name",
      }));
      return;
    }
    if (CheckEmptyEmail(inputData.email)) {
      setIsInvalid((prev) => ({ ...prev, email: true }));
      setHelperText((prev) => ({
        ...prev,
        email: "Email can't be empty",
      }));
      return;
    }
    if (!isValidEmail(inputData.email)) {
      setIsInvalid((prev) => ({ ...prev, email: true }));
      setHelperText((prev) => ({
        ...prev,
        email: "Enter a valid email",
      }));
      return;
    }
    setLoading(true);
    await onSubmit(inputData.firstName, inputData.lastName, inputData.email);
    setLoading(false);
  }

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
        <InputField
          isInvalid={isInvalid.firstName}
          helperText={helperText.firstName}
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
          helperText={helperText.lastName}
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
          helperText={helperText.email}
          handleChange={(val) => {
            HandleInputChange("email", val);
          }}
          label="Email Address"
          id="email"
          type="text"
          value={inputData.email}
        />
      </Box>
      <ButtonField
        text="Continue"
        handleClick={HandleButtonClick}
        loading={loading}
      />
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
