import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { AdminLogin } from "../../../api/admin";
import { useNavigate } from "react-router-dom";

function AdminLanding() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function HandlePasswordChange(event) {
    const passwordInputField = event.target.value;
    setPassword(passwordInputField);
  }

  async function HandleButtonClick() {
    try {
      const data = await AdminLogin(password);
      if (data.result == true) {
        console.log("login Successful");
        document.cookie = "admin_token=valid; path=/";
        navigate("/admindashboard");
      } else {
        console.log("login failed incorrect password");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Admin Login</h2>
        <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
          <TextField
            onChange={HandlePasswordChange}
            value={password}
            fullWidth
            label="Enter Password"
            id="admin-pass"
            type="password"
            variant="outlined"
            InputProps={{
              style: {
                backgroundColor: "#1f2a35",
                color: "white",
                borderRadius: 999,
              },
            }}
            InputLabelProps={{
              style: {
                color: "rgba(255, 255, 255, 0.6)",
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
    </>
  );
}

export default AdminLanding;
