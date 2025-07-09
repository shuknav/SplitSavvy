import React, { useState } from "react";
import LoginEmailField from "./loginEmail";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { loginEmailCheck } from "../api/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [email, setEmail] = useState("");

  async function HandleLoginEmailCheck(email) {
    try {
      const data = await loginEmailCheck(email);
      if (data.status == "user_exist") {
        setEmail(email);
      } else if (data.status == "user_not_exist") {
        navigate("/usernotfound");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-[#101a23] text-white">
        <Header />
        <LoginEmailField onClick={HandleLoginEmailCheck} />
        <Footer />
      </div>
    </>
  );
}

export default Login;
