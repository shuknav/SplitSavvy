import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenVerify } from "../../api/admin";

function WelcomeAdmin() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const isToken = sessionStorage.getItem("token");
      if (isToken) {
        const data = await TokenVerify(isToken);
        if (
          data.result === "Invalid or expired token" ||
          data.result === "No token"
        ) {
          navigate("/admin");
        }
      }
      if (!isToken) {
        navigate("/admin");
        return;
      }
    };
    verifyToken();
  }, []);

  return (
    <>
      <h1> Welcome Admin if you see this you are logged in</h1>
    </>
  );
}

export default WelcomeAdmin;
