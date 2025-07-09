import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

function LoginPasswordField(props) {
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function isValidPassword(password) {
    return password.trim() !== "";
  }

  function handleClickShowPasswordButton() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  function HandlePasswordChange(event) {
    const passwordInputField = event.target.value;
    setPassword(passwordInputField);
    if (isInvalid) setIsInvalid(false);
  }

  function HandleButtonClick() {
    if (!isValidPassword(password)) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);
    props.onClick(password);
  }

  return (
    <main className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Enter your Password
      </h2>
      <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
        <TextField
          sx={{ mb: 2 }}
          disabled
          fullWidth
          label="Email or phone number"
          variant="outlined"
          defaultValue={props.email}
          InputProps={{
            style: {
              backgroundColor: "#1f2a35",
              color: "white",
              borderRadius: 999,
            },
            endAdornment: (
              <InputAdornment position="end">
                <a
                  href="/login"
                  className="text-[#FFFFFF99] hover:underline no-underline"
                >
                  Edit
                </a>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: {
              color: "rgba(255, 255, 255, 0.6)",
            },
          }}
        />
        <TextField
          error={isInvalid}
          helperText={isInvalid ? "incorrect password try again" : ""}
          onChange={HandlePasswordChange}
          value={password}
          fullWidth
          label="Password"
          type={isPasswordVisible ? "text" : "password"}
          id="password"
          variant="outlined"
          InputProps={{
            style: {
              backgroundColor: "#1f2a35",
              color: "white",
              borderRadius: 999,
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordButton}
                  edge="end"
                >
                  {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
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
        Continue
      </Button>
    </main>
  );
}

export default LoginPasswordField;
