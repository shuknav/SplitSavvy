import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputField from "../../../components/InputField";
import ButtonField from "../../../components/ButtonField";
import { AdminAdd } from "../../../api/admin";

function CreateAdmin() {
  const [inputData, setinputData] = useState({
    username: "",
    password: "",
  });

  function HandleInputChange(field, value) {
    //function handles input fields change
    setinputData((prev) => ({ ...prev, [field]: value }));
  }

  async function HandleButtonClick() {
    const res = await AdminAdd(inputData.username, inputData.password);
    console.log(res);
  }

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
        <InputField
          label="Username"
          id="username"
          type="text"
          value={inputData.username}
          handleChange={(val) => {
            HandleInputChange("username", val);
          }}
          // isInvalid={isInvalid.email}
          // helperText={helperText}
        />
        <InputField
          label="Password"
          id="Pass"
          type="password"
          value={inputData.password}
          handleChange={(val) => {
            HandleInputChange("password", val);
          }}
          // isInvalid={isInvalid.email}
          // helperText={helperText}
        />
      </Box>
      <ButtonField text="Continue" handleClick={HandleButtonClick} />
    </>
  );
}

export default CreateAdmin;
