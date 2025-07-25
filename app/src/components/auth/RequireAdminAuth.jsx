import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tokenVerify } from "../../api/admin";

function RequireAdminAuth({ children }) {
  const navigate = useNavigate();
  const [Verified, setVerified] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      const token = sessionStorage.getItem("Admin Token");
      if (!token) {
        navigate("/admin");
        return;
      }
      const res = await tokenVerify(token);
      if (res.success) {
        setVerified(true);
      } else {
        sessionStorage.removeItem("Admin Token");
        navigate("/admin");
      }
    };
    verifyToken();
  }, [navigate]);

  return Verified ? <>{children}</> : null;
}

export default RequireAdminAuth;
