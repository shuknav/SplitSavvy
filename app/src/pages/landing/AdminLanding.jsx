import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";
import { AdminLogin } from "../../api/admin";

function AdminLanding() {
  const [inputData, setinputData] = useState({
    username: "",
    password: "",
  });
  const [isInvalid, setIsInvalid] = useState({
    username: false,
    password: false,
  });
  const [helperText, setHelperText] = useState({
    username: "",
    password: "",
  });

  function CheckEmptyUsername(username) {
    if (username == "") {
      return true;
    }
    return false;
  }

  function CheckEmptyPassword(password) {
    if (password == "") {
      return true;
    }
    return false;
  }

  function HandleInputChange(field, value) {
    //function handles input fields change
    setinputData((prev) => ({ ...prev, [field]: value }));
    if (isInvalid[field]) {
      setIsInvalid((prev) => ({ ...prev, [field]: false }));
    }
  }

  async function HandleClick() {
    if (CheckEmptyUsername(inputData.username)) {
      setIsInvalid((prev) => ({ ...prev, username: true }));
      setHelperText((prev) => ({
        ...prev,
        username: "Username can't be empty",
      }));
      return;
    }
    if (CheckEmptyPassword(inputData.password)) {
      setIsInvalid((prev) => ({ ...prev, password: true }));
      setHelperText((prev) => ({
        ...prev,
        password: "Password can't be empty",
      }));
      return;
    }
    try {
      const data = await AdminLogin(inputData.username, inputData.password);
      if (data.result == true && data.message === "welcome") {
        sessionStorage.setItem("token", data.token);
        console.log("welcome");
      } else if (data.result == false && data.message === "wrngpass") {
        setIsInvalid((prev) => ({ ...prev, password: true }));
        setHelperText((prev) => ({
          ...prev,
          password: "Incorrect password",
        }));
      } else if (data.result == false && data.message === "notadmin") {
        setIsInvalid((prev) => ({ ...prev, username: true }));
        setHelperText((prev) => ({
          ...prev,
          username: "Incorrect username",
        }));
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Admin Login</h2>
        <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
          <InputField
            label="Username"
            id="admin-id"
            type="text"
            value={inputData.username}
            handleChange={(val) => {
              HandleInputChange("username", val);
            }}
            isInvalid={isInvalid.username}
            helperText={helperText.username}
          />
          <InputField
            label="Password"
            id="admin-password"
            type="password"
            value={inputData.password}
            handleChange={(val) => {
              HandleInputChange("password", val);
            }}
            isInvalid={isInvalid.password}
            helperText={helperText.password}
          />
        </Box>
        <ButtonField text="Continue" handleClick={HandleClick} />
      </main>
    </>
  );
}

export default AdminLanding;
