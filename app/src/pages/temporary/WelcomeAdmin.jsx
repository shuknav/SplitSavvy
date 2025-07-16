import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WelcomeAdmin() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("token");
    if (!isLoggedIn) {
      navigate("/admin");
    }
  }, []);

  return (
    <>
      <h1> Welcome Admin if you see this you are logged in</h1>
    </>
  );
}

export default WelcomeAdmin;
