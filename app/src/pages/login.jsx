import React from "react";
import LoginEmailField from "./loginEmail";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function Login() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-[#101a23] text-white">
        <Header />
        <LoginEmailField />
        <Footer />
      </div>
    </>
  );
}

export default Login;
