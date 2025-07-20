import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenVerify } from "../../api/admin";

function RequireAdminAuth({ Children }) {
  const navigate = useNavigate();
  const [Verified, setVerified] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      const token = sessionStorage.getItem("User Token");
      if (!token) {
        navigate("/admin");
        return;
      }
      try {
        const data = await TokenVerify(token);
        if (data.result === "Verified") {
          setVerified(true);
        } else {
          sessionStorage.removeItem("token");
          navigate("/admin");
        }
      } catch (err) {
        console.log("token verification error", err);
        navigate("/admin");
      }
    };
    verifyToken();
  }, [navigate]);

  return Verified ? <>{Children}</> : null;
}

export default RequireAdminAuth;
