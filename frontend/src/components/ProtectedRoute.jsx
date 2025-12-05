import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Protect routes for authenticated users (normal or admin)
export const ProtectedRoute = ({ redirectPath = "/auth" }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />; // Render nested routes
};

// Protect routes only for admin
export const AdminRoute = ({ redirectPath = "/" }) => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "admin") {
    // Not admin → redirect to home
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
