import { AuthContext } from "./AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { authToken, setAuthToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        setAuthToken(token);
        if (!token) {
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [navigate, setAuthToken]);

  if (!authToken) {
    return null; // Prevents any further renders if authToken is not set
  }

  return (
    <Outlet />
  );
};

export default ProtectedRoutes;
