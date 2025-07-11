import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function AdminPasswordFields(props) {
  return (
    <>
      <TextField
        sx={{ mb: 2 }}
        onChange={(event) => {
          props.HandleChange(event.target.value);
        }}
        value={props.value}
        fullWidth
        label={props.label}
        id={props.id}
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
    </>
  );
}

export default AdminPasswordFields;
