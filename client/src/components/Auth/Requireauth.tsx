import { useLocation, Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../../services/useAuth";
import { jwtDecode } from "jwt-decode";
import { MyJwtPayload } from "../../types/Auth.types";

export default function RequireAuth({ onlyPublic }: { onlyPublic: boolean }) {
  const location = useLocation();
  const { user } = useAuth();

  const userIsLogged = (): boolean => {
    if (user) {
      const decodedToken = jwtDecode(user.token) as MyJwtPayload;
      return Boolean(decodedToken && decodedToken.id);
    }
    return false;
  };

  if (!userIsLogged()) {
    // outlet are the children of the route onlyPublic
    return onlyPublic ? (
      <Outlet />
    ) : (
      <Navigate to="/signin" state={{ from: location }} replace />
    );
  }
  return onlyPublic ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}

RequireAuth.propTypes = {
  onlyPublic: PropTypes.bool.isRequired,
};
