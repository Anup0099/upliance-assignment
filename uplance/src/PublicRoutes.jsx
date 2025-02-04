import { Navigate } from "react-router-dom";
import { useAuth } from   "./AuthContext";

const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? <Navigate to="/" /> : children;
};

export default PublicRoute;
