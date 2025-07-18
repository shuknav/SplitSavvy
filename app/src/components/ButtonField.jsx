import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

function ButtonField({
  text,
  handleClick,
  disabled = false,
  endIcon = null,
  loading = false,
}) {
  return (
    <>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          textTransform: "none",
          borderRadius: 999,
          paddingX: 4,
          paddingY: 1.5,
        }}
        disabled={disabled || loading}
        endIcon={
          loading ? <CircularProgress size={24} color="secondary" /> : endIcon
        }
      >
        {loading ? "loading..." : text}
      </Button>
    </>
  );
}

export default ButtonField;
