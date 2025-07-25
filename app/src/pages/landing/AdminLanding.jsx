import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { adminLogin } from "../../api/admin";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../../utils/validation";

function AdminLanding() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const isToken = sessionStorage.getItem("Admin Token");
      if (isToken) {
        navigate("/admin/dashboard");
      }
    };
    verifyToken();
  }, []);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [inputData, setinputData] = useState({
    username: "",
    password: "",
  });
  const [isInvalid, setIsInvalid] = useState({
    username: false,
    password: false,
  });
  const [helperText, setHelperText] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(field, value) {
    //function handles input fields change
    setinputData((prev) => ({ ...prev, [field]: value }));
    if (isInvalid[field]) {
      setIsInvalid((prev) => ({ ...prev, [field]: false }));
    }
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  async function handleClick() {
    if (isEmpty(inputData.username)) {
      setIsInvalid((prev) => ({ ...prev, username: true }));
      setHelperText((prev) => ({
        ...prev,
        username: "Username can't be empty",
      }));
      return;
    }
    if (isEmpty(inputData.password)) {
      setIsInvalid((prev) => ({ ...prev, password: true }));
      setHelperText((prev) => ({
        ...prev,
        password: "Password can't be empty",
      }));
      return;
    }
    setIsLoading(true);
    const res = await adminLogin(inputData.username, inputData.password);
    setIsLoading(false);
    if (res.success) {
      sessionStorage.setItem("Admin Token", res.token);
      navigate("/admin/dashboard");
    } else {
      if (res.message === "Incorrect password") {
        setIsInvalid((prev) => ({ ...prev, password: true }));
        setHelperText((prev) => ({
          ...prev,
          password: "Incorrect password",
        }));
      } else {
        setMessage(res.status + " " + res.message);
        setOpen(true);
      }
    }
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Admin Login</h2>
        <Box sx={{ width: "100%", maxWidth: 400 }} className="mb-6">
          <InputField
            label="Username"
            id="admin-id"
            type="text"
            value={inputData.username}
            handleChange={(val) => {
              handleInputChange("username", val);
            }}
            isInvalid={isInvalid.username}
            helperText={helperText.username}
          />
          <InputField
            label="Password"
            id="admin-password"
            type="password"
            value={inputData.password}
            handleChange={(val) => {
              handleInputChange("password", val);
            }}
            isInvalid={isInvalid.password}
            helperText={helperText.password}
          />
        </Box>
        <ButtonField
          text="Continue"
          handleClick={handleClick}
          loading={isLoading}
        />
      </main>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default AdminLanding;
