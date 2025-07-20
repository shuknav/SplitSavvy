import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import AdminPasswordFields from "./adminSettingsPassword";

function AdminSettings() {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  function HandlePasswordChange(field, value) {
    setPasswords((prev) => ({ ...prev, [field]: value }));
  }

  function HandleButtonClick() {
    //just a placeholder later will check if the new password fields are same then check the
    //current password and then will update the password
    console.log("success");
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Change Admin Password
        </h2>
        <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
          <AdminPasswordFields
            HandleChange={(val) => HandlePasswordChange("current", val)}
            value={passwords.current}
            label={"Current Password"}
            id={"currentAdminPass"}
          />
          <AdminPasswordFields
            HandleChange={(val) => HandlePasswordChange("new", val)}
            value={passwords.new}
            label={"New Password"}
            id={"newAdminPass"}
          />
          <AdminPasswordFields
            HandleChange={(val) => HandlePasswordChange("confirm", val)}
            value={passwords.confirm}
            label={"Confirm Password"}
            id={"confirmAdminPass"}
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
    </>
  );
}

export default AdminSettings;
