import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  console.log(isAuthenticated)
  console.log(loading)
  
  if (loading) return <span class="loader"></span>;
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;
  return <Outlet/>;
};