import React from "react";
import LoginEmailField from "./loginEmail";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { loginEmailCheck } from "../api/auth";

function Login() {
  async function HandleLoginEmailCheck(email) {
    try {
      const data = await loginEmailCheck(email);
      if (data.status == "user_exist") {
        console.log("success");
      } else if (data.status == "user_not_exist") {
        console.log("no user");
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
