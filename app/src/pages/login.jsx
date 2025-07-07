import React from "react";
import { Box, TextField, Button } from "@mui/material";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function Login() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-[#101a23] text-white">
        <Header />
        <main className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Log in</h2>
          <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
            <TextField
              fullWidth
              label="Email or phone number"
              id="uid"
              variant="outlined"
              InputProps={{
                style: {
                  backgroundColor: "#1f2a35",
                  color: "white",
                  borderRadius: 999,
                },
              }}
              InputLabelProps={{
                style: { color: "rgba(255, 255, 255, 0.6)" },
              }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: 999,
              paddingX: 4,
              paddingY: 1.5,
            }}
          >
            Log in
          </Button>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Login;
