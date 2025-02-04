import { useAuth } from "./AuthContext"


const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />
}

export default PrivateRoute;