import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem("accessToken");
  const userRaw = localStorage.getItem("user");

  if (!token || !userRaw) {
    return <Navigate to="/signin" replace />;
  }

  let user;
  try {
    user = JSON.parse(userRaw);
  } catch {
    return <Navigate to="/signin" replace />;
  }

  // Normalize role comparison (VERY IMPORTANT)
  const userRole = user.role?.toLowerCase();
  const allowed = allowedRoles.map(r => r.toLowerCase());

  if (allowed.length && !allowed.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
