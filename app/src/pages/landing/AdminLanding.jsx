import React, { useState } from "react";
import { Box } from "@mui/material";
import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";
import { AdminLogin } from "../../api/admin";

function AdminLanding() {
  const [inputData, setinputData] = useState({
    username: "",
    password: "",
  });

  function HandleInputChange(field, value) {
    //function handles input fields change
    setinputData((prev) => ({ ...prev, [field]: value }));
  }

  async function HandleClick() {
    try {
      const data = await AdminLogin(inputData.username, inputData.password);
      if (data.result == true && data.message === "welcome") {
        console.log("welcome");
      } else if (data.result == false && data.message === "wrngpass") {
        console.log("enter correct password");
      } else if (data.result == false && data.message === "notadmin") {
        console.log("enter correct username");
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
          />
          <InputField
            label="Password"
            id="admin-password"
            type="password"
            value={inputData.password}
            handleChange={(val) => {
              HandleInputChange("password", val);
            }}
          />
        </Box>
        <ButtonField text="Continue" handleClick={HandleClick} />
      </main>
    </>
  );
}

export default AdminLanding;
