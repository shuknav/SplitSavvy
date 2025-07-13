import React from "react";
import Button from "@mui/material/Button";

function ButtonField({ text }) {
  return (
    <>
      <Button
        // onClick={HandleButtonClick}
        variant="contained"
        sx={{
          textTransform: "none",
          borderRadius: 999,
          paddingX: 4,
          paddingY: 1.5,
        }}
      >
        {text}
      </Button>
    </>
  );
}

export default ButtonField;
