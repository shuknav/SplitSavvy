import React from "react";
import { Box, TextField, Button } from "@mui/material";

function LoginEmailField() {
  return (
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
        Continue
      </Button>
    </main>
  );
}

export default LoginEmailField;
