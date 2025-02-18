import { Navigate } from "react-router-dom"

const MainRoutes = ({ element, isAdmin }) => {
  return isAdmin ? element : <Navigate to="/fanaka-dashboard" />;
};


export default MainRoutes
