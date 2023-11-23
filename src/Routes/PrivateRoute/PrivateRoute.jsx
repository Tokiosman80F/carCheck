import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user,loader } = useContext(AuthContext);
  if(loader) return <progress className="progress w-56"></progress>
  if (user?.email) return children;
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;
