import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";
import { isEmpty, isValidEmail, isValidName } from "../../utils/validation";

function WaitlistForm({ onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);
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

  function handleInputChange(field, value) {
    //function handles input fields change
    setinputData((prev) => ({ ...prev, [field]: value }));
    if (isInvalid[field]) {
      setIsInvalid((prev) => ({ ...prev, [field]: false }));
    }
  }

  async function handleButtonClick() {
    //button responsible for validating email and adding user to waitlist
    const fields = [
      {
        key: "firstName",
        value: inputData.firstName,
        validate: isValidName,
        emptyMessage: "First name can't be empty",
        invalidMessage: "Enter a valid first name",
      },
      {
        key: "lastName",
        value: inputData.lastName,
        validate: isValidName,
        emptyMessage: "Last name can't be empty",
        invalidMessage: "Enter a valid last name",
      },
      {
        key: "email",
        value: inputData.email,
        validate: isValidEmail,
        emptyMessage: "Email can't be empty",
        invalidMessage: "Enter a valid email",
      },
    ];
    for (const field of fields) {
      if (isEmpty(field.value)) {
        setIsInvalid((prev) => ({ ...prev, [field.key]: true }));
        setHelperText((prev) => ({ ...prev, [field.key]: field.emptyMessage }));
        return;
      }
      if (!field.validate(field.value)) {
        setIsInvalid((prev) => ({ ...prev, [field.key]: true }));
        setHelperText((prev) => ({
          ...prev,
          [field.key]: field.invalidMessage,
        }));
        return;
      }
    }
    setIsLoading(true);
    await onSubmit(inputData.firstName, inputData.lastName, inputData.email);
    setIsLoading(false);
  }

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
        <InputField
          isInvalid={isInvalid.firstName}
          helperText={helperText.firstName}
          handleChange={(val) => {
            handleInputChange("firstName", val);
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
            handleInputChange("lastName", val);
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
            handleInputChange("email", val);
          }}
          label="Email Address"
          id="email"
          type="text"
          value={inputData.email}
        />
      </Box>
      <ButtonField
        text="Continue"
        handleClick={handleButtonClick}
        loading={isLoading}
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
