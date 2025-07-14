import React, { useState } from "react";
import { TextField } from "@mui/material";

function InputField({
  label,
  id,
  type,
  value,
  handleChange,
  isInvalid,
  helperText,
}) {
  return (
    <>
      <TextField
        error={isInvalid}
        helperText={isInvalid ? helperText : ""}
        value={value}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        sx={{ mb: 2 }}
        fullWidth
        label={label}
        id={id}
        type={type}
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
            color: isInvalid ? "#f44336" : "rgba(255, 255, 255, 0.6)",
          },
        }}
      />
    </>
  );
}

export default InputField;
