import { Navigate, Outlet } from "react-router";
import { useAuth } from "./AuthProvider";

export const PublicRoute = () => {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (user) {
    const targetPath = role === 'admin' ? '/admin' : '/';
    return <Navigate to={targetPath} replace />;
  }

  return <Outlet />;
}; 