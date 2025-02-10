import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Aboutpage from './components/AboutPage/Aboutpage'
import Contactpage from './components/ContactPage/Contactpage'
import MainBlog from './components/BlogPage/MainBlog'
import { Scroll } from 'lucide-react'
import ScrollToTop from './components/ScrollTop'

function App() {
  return (
    <>
    <div>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Homepage/>} />
          <Route path='/about' element = {<Aboutpage/>} />
          <Route path='/contact' element = {<Contactpage/>} />
          <Route path='/blog' element = {<MainBlog/>} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
