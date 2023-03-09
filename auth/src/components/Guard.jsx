import React from "react";
import { Navigate } from "react-router-dom";

const Guard = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  if (user?.token) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default Guard;
