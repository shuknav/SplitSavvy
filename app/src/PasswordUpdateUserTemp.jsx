import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputField from "./components/InputField";
import ButtonField from "./components/ButtonField";

function PassChange() {
  const [inputData, setinputData] = useState({
    oldPass: "",
    newPass: "",
    cNewPass: "",
  });

  function HandleInputChange(field, value) {
    //function handles input fields change
    setinputData((prev) => ({ ...prev, [field]: value }));
  }

  function HandleButtonClick() {
    console.log("changed");
  }

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
        <InputField
          label="Current Password"
          id="CPass"
          type="password"
          value={inputData.oldPass}
          handleChange={(val) => {
            HandleInputChange("oldPass", val);
          }}
          // isInvalid={isInvalid.email}
          // helperText={helperText}
        />
        <InputField
          label="New Password"
          id="NPass"
          type="password"
          value={inputData.newPass}
          handleChange={(val) => {
            HandleInputChange("newPass", val);
          }}
          // isInvalid={isInvalid.email}
          // helperText={helperText}
        />
        <InputField
          label="Confirm New Password"
          id="CNPass"
          type="password"
          value={inputData.cNewPass}
          handleChange={(val) => {
            HandleInputChange("cNewPass", val);
          }}
          // isInvalid={isInvalid.email}
          // helperText={helperText}
        />
      </Box>
      <ButtonField text="Continue" handleClick={HandleButtonClick} />
    </>
  );
}

export default PassChange;
