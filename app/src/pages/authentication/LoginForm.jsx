import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputField from "../../components/InputField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import ButtonField from "../../components/ButtonField";

function LoginForm({
  handleVerify,
  email,
  passwordfield,
  passwordError = false,
  passwordHelperText = "Password can't be empty",
  clearPasswordError,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputData, setinputData] = useState({
    email: "",
    password: "",
  });
  const [isInvalid, setIsInvalid] = useState({
    email: false,
    password: false,
  });

  const [helperText, setHelperText] = useState("");

  function CheckEmptyEmail(email) {
    if (email == "") {
      return true;
    }
    return false;
  }

  function isValidPassword(password) {
    //funciton to makesure the user doesnt enter an empty field in password
    return password.trim() !== "";
  }

  function HandleInputChange(field, value) {
    //function handles input fields change
    setinputData((prev) => ({ ...prev, [field]: value }));
    if (isInvalid[field]) {
      setIsInvalid((prev) => ({ ...prev, [field]: false }));
      setHelperText("");
    }
    if (field === "password" && typeof clearPasswordError === "function") {
      clearPasswordError();
    }
  }

  function isValidEmail(email) {
    //function to validate email entered by user
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleClickShowPasswordButton() {
    //function manages visibility icon of the password
    setIsPasswordVisible(!isPasswordVisible);
  }

  function HandleButtonClickEmail() {
    //button responsible for validating email and adding user to waitlist

    if (CheckEmptyEmail(inputData.email)) {
      setIsInvalid((prev) => ({ ...prev, email: true }));
      setHelperText("Email cant be empty");
      return;
    }

    if (!isValidEmail(inputData.email)) {
      setIsInvalid((prev) => ({ ...prev, email: true }));
      setHelperText("Enter a valid email");
      return;
    }
    handleVerify(inputData.email);
    // onSubmit(inputData.firstName, inputData.lastName, inputData.email);
  }

  function HandleButtonClick() {
    // Function responsible for password validation and login verification
    if (!isValidPassword(inputData.password)) {
      setIsInvalid((prev) => ({ ...prev, password: true }));
      return;
    }
    handleVerify(inputData.password);
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center">
        {passwordfield ? (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enter your password
            </h2>
            <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
              <InputField
                label="Email Address"
                id="email"
                type="text"
                disabled={true}
                value={email}
                handleChange={(val) => {
                  HandleInputChange("email", val);
                }}
                isInvalid={isInvalid.email}
                helperText={helperText}
                endAdornment={
                  <InputAdornment position="end">
                    <a
                      href="/login"
                      className="text-[#FFFFFF99] hover:underline no-underline"
                    >
                      Edit
                    </a>
                  </InputAdornment>
                }
              />
              <InputField
                label="Password"
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                value={inputData.password}
                handleChange={(val) => {
                  HandleInputChange("password", val);
                }}
                isInvalid={isInvalid.password || passwordError}
                helperText={
                  passwordError ? passwordHelperText : "Password can't be empty"
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPasswordButton}
                      edge="end"
                    >
                      {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
            <ButtonField text="Continue" handleClick={HandleButtonClick} />
          </>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Log in</h2>
            <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
              <InputField
                label="Email Address"
                id="email"
                type="text"
                value={inputData.email}
                handleChange={(val) => {
                  HandleInputChange("email", val);
                }}
                isInvalid={isInvalid.email}
                helperText={helperText}
              />
            </Box>
            <ButtonField text="Continue" handleClick={HandleButtonClickEmail} />
          </>
        )}
      </main>
    </>
  );
}

export default LoginForm;
