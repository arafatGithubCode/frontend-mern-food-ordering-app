import Spinner from "@/components/custom/Spinner";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const checkAuth0 = async () => {
      if (!isLoading && !isAuthenticated) {
        await loginWithRedirect();
      }
    };
    checkAuth0();
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) return <Spinner />;
  return <>{isAuthenticated ? <Outlet /> : null}</>;
};

export default ProtectedRoute;
