import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputField from "../../../components/InputField";
import ButtonField from "../../../components/ButtonField";
import { PasswordUpdate } from "../../../api/admin";

function PasswordChange() {
  const [inputData, setinputData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [isInvalid, setIsInvalid] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });
  const [helperText, setHelperText] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  function IsPasswordFieldEmpty(password) {
    if (password === "") {
      return true;
    }
    return false;
  }

  function HandleInputChange(field, value) {
    //function handles input fields change
    setinputData((prev) => ({ ...prev, [field]: value }));
    if (isInvalid[field]) {
      setIsInvalid((prev) => ({ ...prev, [field]: false }));
      setHelperText((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  }

  async function HandleButtonClick() {
    if (IsPasswordFieldEmpty(inputData.oldPassword)) {
      setIsInvalid((prev) => ({ ...prev, oldPassword: true }));
      setHelperText((prev) => ({
        ...prev,
        oldPassword: "Current Password can't be empty",
      }));
      return;
    }
    if (IsPasswordFieldEmpty(inputData.newPassword)) {
      setIsInvalid((prev) => ({ ...prev, newPassword: true }));
      setHelperText((prev) => ({
        ...prev,
        newPassword: "Current Password can't be empty",
      }));
      return;
    }
    if (IsPasswordFieldEmpty(inputData.confirmNewPassword)) {
      setIsInvalid((prev) => ({ ...prev, confirmNewPassword: true }));
      setHelperText((prev) => ({
        ...prev,
        confirmNewPassword: "Current Password can't be empty",
      }));
      return;
    }
    if (inputData.oldPassword === inputData.newPassword) {
      setIsInvalid((prev) => ({
        ...prev,
        oldPassword: true,
        newPassword: true,
      }));
      setHelperText((prev) => ({
        ...prev,
        oldPassword: "Old and new password can't be same",
        newPassword: "Old and new password can't be same",
      }));
      return;
    } else {
      if (inputData.newPassword === inputData.confirmNewPassword) {
        const res = await PasswordUpdate(
          inputData.oldPassword,
          inputData.confirmNewPassword
        );
        if (res.result === "wrngpassword") {
          setIsInvalid((prev) => ({
            ...prev,
            oldPassword: true,
          }));
          setHelperText((prev) => ({
            ...prev,
            oldPassword: "Incorrect password",
          }));
        }
      } else {
        setIsInvalid((prev) => ({
          ...prev,
          confirmNewPassword: true,
          newPassword: true,
        }));
        setHelperText((prev) => ({
          ...prev,
          confirmNewPassword: "Password doesn't match",
          newPassword: "Password doesn't match",
        }));
      }
    }
  }

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
        <InputField
          label="Current Password"
          id="CurrentPassword"
          type="password"
          value={inputData.oldPassword}
          handleChange={(val) => {
            HandleInputChange("oldPassword", val);
          }}
          isInvalid={isInvalid.oldPassword}
          helperText={helperText.oldPassword}
        />
        <InputField
          label="New Password"
          id="NewPassword"
          type="password"
          value={inputData.newPassword}
          handleChange={(val) => {
            HandleInputChange("newPassword", val);
          }}
          isInvalid={isInvalid.newPassword}
          helperText={helperText.newPassword}
        />
        <InputField
          label="Confirm New Password"
          id="ConfirmNewPassword"
          type="password"
          value={inputData.confirmNewPassword}
          handleChange={(val) => {
            HandleInputChange("confirmNewPassword", val);
          }}
          isInvalid={isInvalid.confirmNewPassword}
          helperText={helperText.confirmNewPassword}
        />
      </Box>
      <ButtonField text="Continue" handleClick={HandleButtonClick} />
    </>
  );
}

export default PasswordChange;
