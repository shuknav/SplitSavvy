import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useSearchParams } from "react-router-dom";
import { onBoard, tokenValidation } from "../../api/waitlist";

function CreatePassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [tokenResponse, setTokenResponse] = useState({});

  useEffect(() => {
    const tokenVerification = async () => {
      const res = await tokenValidation(token);
      setTokenResponse(res);
    };
    tokenVerification();
  }, []);

  const [isPasswordVisible, setIsPasswordVisible] = useState({
    newPassword: false,
    confirmNewPassword: false,
  });
  const [inputData, setinputData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const [isInvalid, setIsInvalid] = useState({
    newPassword: false,
    confirmNewPassword: false,
  });
  const [helperText, setHelperText] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  function isFieldEmpty(value) {
    if (value === "") {
      return true;
    }
    return false;
  }

  function handleClickShowPasswordButton(field) {
    setIsPasswordVisible((prev) => ({
      ...prev,
      [field]: !isPasswordVisible[field],
    }));
  }

  function HandleInputChange(field, value) {
    //function handles input fields change
    setinputData((prev) => ({ ...prev, [field]: value }));
    if (isInvalid[field]) {
      setIsInvalid((prev) => ({ ...prev, [field]: false }));
      setHelperText((prev) => ({ ...prev, [field]: "" }));
    }
  }

  async function HandleButtonClick() {
    if (tokenResponse.mode === "create") {
      if (isFieldEmpty(inputData.newPassword)) {
        setIsInvalid((prev) => ({ ...prev, newPassword: true }));
        setHelperText((prev) => ({
          ...prev,
          newPassword: "New password can't be empty",
        }));
        return;
      }
      if (isFieldEmpty(inputData.confirmNewPassword)) {
        setIsInvalid((prev) => ({ ...prev, confirmNewPassword: true }));
        setHelperText((prev) => ({
          ...prev,
          confirmNewPassword: "Confirm password can't be empty",
        }));
        return;
      }
      if (inputData.newPassword !== inputData.confirmNewPassword) {
        setIsInvalid((prev) => ({
          ...prev,
          newPassword: true,
          confirmNewPassword: true,
        }));
        setHelperText((prev) => ({
          ...prev,
          newPassword: "Password doesn't match",
          confirmNewPassword: "Password doesn't match",
        }));
        return;
      }
      if (inputData.newPassword === inputData.confirmNewPassword) {
        const res = await onBoard(token, inputData.newPassword);
        console.log(res);
      }
    }
  }
  return (
    <>
      <Header />
      <h2>
        {tokenResponse.mode == "create"
          ? "Create your password"
          : "Reset your password"}
      </h2>
      <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
        <InputField
          label="New Password"
          id="NewPassword"
          type={isPasswordVisible.newPassword ? "text" : "password"}
          value={inputData.newPassword}
          handleChange={(val) => {
            HandleInputChange("newPassword", val);
          }}
          isInvalid={isInvalid.newPassword}
          helperText={helperText.newPassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  handleClickShowPasswordButton("newPassword");
                }}
                edge="end"
              >
                {isPasswordVisible.newPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <InputField
          label="Confirm New Password"
          id="ConfirmNewPassword"
          type={isPasswordVisible.confirmNewPassword ? "text" : "password"}
          value={inputData.confirmNewPassword}
          handleChange={(val) => {
            HandleInputChange("confirmNewPassword", val);
          }}
          isInvalid={isInvalid.confirmNewPassword}
          helperText={helperText.confirmNewPassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  handleClickShowPasswordButton("confirmNewPassword");
                }}
                edge="end"
              >
                {isPasswordVisible.confirmNewPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      <ButtonField text="Continue" handleClick={HandleButtonClick} />
      <Footer />
    </>
  );
}

export default CreatePassword;
