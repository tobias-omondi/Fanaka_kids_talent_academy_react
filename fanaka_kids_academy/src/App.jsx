import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Aboutpage from './components/AboutPage/Aboutpage';
import Contactpage from './components/ContactPage/Contactpage';
import MainBlog from './components/BlogPage/MainBlog';
import ScrollToTop from './components/ScrollTop';
import GalleryImagepage from './components/Media/GalleryImagepage';
import GalleryVideos from './components/Media/GalleryVideos';
import MainRoutes from './Dashboard/Main/MainRoutes';

function AppContent() {
  const location = useLocation();  
  const hideNavbar = location.pathname.startsWith("/fanaka-dashboard"); // Hide navbar on dashboard pages

  // Check if user is an admin
  const isAdmin = localStorage.getItem("isAdmin") === "true"; 
  console.log("Admin status:", isAdmin);  // Debug log to check admin status

  return (
    <>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}  {/* Hide Navbar on dashboard */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/blog" element={<MainBlog />} />
        <Route path="/images" element={<GalleryImagepage />} />
        <Route path="/videos" element={<GalleryVideos />} />
        <Route
          path="/fanaka-dashboard"
          element={<MainRoutes isAdmin={isAdmin} />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;