import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  loginEmailCheck,
  loginVerify,
  tokenVerify,
  resetPassword,
} from "../../api/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  //structure of logi page and the page responsible for communicating from backend
  const navigate = useNavigate();
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState();

  useEffect(() => {
    const verifyToken = async () => {
      const isToken = localStorage.getItem("User Token");
      if (isToken) {
        const data = await tokenVerify(isToken);
        if (data.result === "Verified") {
          navigate("/user");
        }
      }
    };
    verifyToken();
  }, []);

  function clearPasswordError() {
    setPasswordError(false);
    setPasswordHelperText("");
  }

  async function HandleLoginEmailCheck(email) {
    //verifies the email in user table
    setIsLoading(true);
    try {
      const data = await loginEmailCheck(email);
      if (data.status == "user_exist") {
        setEmail(email);
        setShowPasswordField(true);
      } else if (data.status == "user_not_exist") {
        navigate("/message", {
          state: {
            type: "loginNotFound",
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  async function HandleLogin(password) {
    //verify the user using password authentication
    setIsLoading(true);
    try {
      const data = await loginVerify(email, password);
      if (data.result == true) {
        localStorage.setItem("User Token", data.token);
        navigate("/user");
      } else if (data.result == false) {
        setPasswordError(true);
        setPasswordHelperText("Incorrect password");
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  async function handleForgotPassword() {
    setIsLoading(true);
    const res = await resetPassword(email);
    setIsLoading(false);
    if (res.success) {
      setIsError(false);
      setMessage(res.status + " " + res.message);
      setOpen(true);
    } else {
      setIsError(true);
      setMessage(res.status + " " + res.message);
      setOpen(true);
    }
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  // structure of the login page
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-[#101a23] text-white">
        <Header />

        {showPasswordField ? (
          <LoginForm
            passwordfield={showPasswordField}
            email={email}
            handleVerify={HandleLogin}
            passwordError={passwordError}
            passwordHelperText={passwordHelperText}
            clearPasswordError={clearPasswordError}
            isLoading={isLoading}
            forgotPassword={handleForgotPassword}
          />
        ) : (
          <LoginForm
            handleVerify={HandleLoginEmailCheck}
            isLoading={isLoading}
          />
        )}
        <Footer />
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={isError ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Login;
