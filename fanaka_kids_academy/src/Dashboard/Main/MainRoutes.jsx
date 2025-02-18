import { Navigate } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";

const MainRoutes = ({ element, isAdmin }) => {
  if (!isAdmin) {
    return <Navigate to="/" />; // Redirect non-admin users to the homepage
  }

  return (
    <div>
      <DashboardNavbar />
      {element}
    </div>
  );
};

export default MainRoutes;
