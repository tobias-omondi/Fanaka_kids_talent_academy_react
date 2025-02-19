import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import AdminPanelPage from "../Page/AdminPanaelPage";
import OverviewPage from "../Page/OverviewPage";
import ImagesPage from "../Page/ImagesPage";
import VideosPage from "../Page/VideosPage";
import BlogPage from "../Page/BlogPage";
import Settings from "../Page/SettingsPage";
import EventsDates from "../../components/BlogPage/EventsDates";
import MessagePage from "../Page/MessagePage";


const MainRoutes = ({ isAdmin }) => {
  if (!isAdmin) {
    return <Navigate to="/" />; // Redirect non-admin users to the homepage
  }

  return (
    <div className="flex">
       <SideNavbar/>
      <div className="flex-grow"> 
        <Routes>
          <Route path="/fanaka-dashboard/admin-panel" element={<AdminPanelPage />} />
          <Route path="/fanaka-dashboard/overview" element={<OverviewPage/>} />
          <Route path="/fanaka-dashboard/images" element={<ImagesPage/>} />
          <Route path="/fanaka-dashboard/videos" element={<VideosPage/>} />
          <Route path="/fanaka-dashboard/blogs" element={<BlogPage/>} />
          <Route path="/fanaka-dashboard/events&dates" element={<EventsDates/>} />
          <Route path="/fanaka-dashboard/message" element={<MessagePage/>} />
          <Route path="/fanaka-dashboard/settings" element={<Settings/>} />
        </Routes>
      </div>
    </div>
  );
};

export default MainRoutes;
