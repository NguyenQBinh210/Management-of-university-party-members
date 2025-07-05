import { Navigate, Outlet } from "react-router";
import { useAuth } from "./AuthProvider";

export const ProtectedRoute = ({ requiredRole }) => {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />; // Or a "Not Authorized" page
  }

  return <Outlet />;
}; 