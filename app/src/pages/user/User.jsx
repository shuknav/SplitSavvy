import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenVerify, UserDetails } from "../../api/auth";

function User() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const isToken = localStorage.getItem("User Token");
      if (!isToken) {
        navigate("/login");
      }
      if (isToken) {
        const data = await TokenVerify(isToken);
        if (
          data.result === "No token" ||
          data.result === "Invalid or expired token"
        ) {
          navigate("/login");
        } else if (data.result === "Verified") {
          const res = await UserDetails(isToken);
          sessionStorage.setItem("First Name", res.firstName);
          sessionStorage.setItem("Last Name", res.lastName);
          sessionStorage.setItem("email", res.email);
        }
      }
    };
    verifyToken();
  }, []);

  function HandleClick() {
    localStorage.removeItem("User Token");
    navigate("/login");
  }

  return (
    <>
      <h1>Hello</h1>
      <button onClick={HandleClick}>log out</button>
    </>
  );
}

export default User;
