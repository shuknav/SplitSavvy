import React from "react";
import Box from "@mui/material/Box";
import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";

function LoginForm() {
  return (
    <>
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Log in</h2>
        <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
          <InputField label="Email Address" id="email" type="text" />
        </Box>
        <a href="#" className="mb-2">
          Forgot your password?
        </a>
        <ButtonField text="Continue" />
      </main>
    </>
  );
}

export default LoginForm;
