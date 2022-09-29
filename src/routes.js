import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/use-auth";
import { getAuth } from "firebase/auth"
const auth = getAuth(false);



export const PrivateRoute = ({ Component }) => {
  const { isAuth } = useAuth();
  return isAuth ? <Component /> : <Navigate to="/" />;
};

export const PublicRoute = ({ Component }) => {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to="/dashboard" /> : <Component />;
};
