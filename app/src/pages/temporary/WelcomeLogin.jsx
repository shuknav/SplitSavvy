import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WelcomeLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <h1>If you can read this you are logged in</h1>
    </>
  );
}

export default WelcomeLogin;
