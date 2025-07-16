import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenVerify } from "../../api/auth";

function WelcomeLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    const verifyToken = async () => {
      const isToken = localStorage.getItem("token");
      if (isToken) {
        const data = await TokenVerify(isToken);
        if (
          data.result === "No token" ||
          data.result === "Invalid or expired token"
        ) {
          navigate("/login");
        }
      }
      if (!isToken) {
        navigate("/login");
      }
    };
    verifyToken();
  }, []);

  return (
    <>
      <h1>If you can read this you are logged in</h1>
    </>
  );
}

export default WelcomeLogin;
