import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputField from "../../../components/InputField";
import ButtonField from "../../../components/ButtonField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { adminAdd } from "../../../api/admin";

function CreateAdmin() {
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

  const [superUser, setSuperUser] = useState(false);

  function HandleSwitch() {
    setSuperUser(!superUser);
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

  function IsFieldEmpty(data) {
    if (data === "") {
      return true;
    }
    return false;
  }

  async function HandleButtonClick() {
    if (IsFieldEmpty(inputData.username)) {
      setIsInvalid((prev) => ({ ...prev, username: true }));
      setHelperText((prev) => ({
        ...prev,
        username: "Username can't be empty",
      }));
      return;
    }
    if (IsFieldEmpty(inputData.password)) {
      setIsInvalid((prev) => ({ ...prev, password: true }));
      setHelperText((prev) => ({
        ...prev,
        password: "Username can't be empty",
      }));
      return;
    }
    const res = await adminAdd(
      inputData.username,
      inputData.password,
      superUser
    );
    if (res.result === "notavailable") {
      setIsInvalid((prev) => ({ ...prev, username: true }));
      setHelperText((prev) => ({
        ...prev,
        username: "Username not available",
      }));
    }
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
          isInvalid={isInvalid.username}
          helperText={helperText.username}
        />
        <InputField
          label="Password"
          id="Pass"
          type="password"
          value={inputData.password}
          handleChange={(val) => {
            HandleInputChange("password", val);
          }}
          isInvalid={isInvalid.password}
          helperText={helperText.password}
        />
      </Box>
      <FormControlLabel
        control={<Switch onChange={HandleSwitch} />}
        label="Super User"
      />
      <ButtonField text="Continue" handleClick={HandleButtonClick} />
    </>
  );
}

export default CreateAdmin;
