import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { loginEmailCheck, loginVerify } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  //structure of logi page and the page responsible for communicating from backend
  const navigate = useNavigate();
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [email, setEmail] = useState("");

  async function HandleLoginEmailCheck(email) {
    //verifies the email in user table
    try {
      const data = await loginEmailCheck(email);
      if (data.status == "user_exist") {
        setEmail(email);
        setShowPasswordField(true);
      } else if (data.status == "user_not_exist") {
        // navigate("/usernotfound");
        console.log("no user");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function HandleLogin(password) {
    //verify the user using password authentication
    try {
      const data = await loginVerify(email, password);
      if (data.result == true) {
        console.log("logged in");
      } else if (data.result == false) {
        console.log("enter correct password");
      }
    } catch (err) {
      console.log(err);
    }
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
          />
        ) : (
          <LoginForm handleVerify={HandleLoginEmailCheck} />
        )}
        <Footer />
      </div>
    </>
  );
}

export default Login;
