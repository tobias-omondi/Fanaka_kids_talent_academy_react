import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Aboutpage from './components/AboutPage/Aboutpage'
import Contactpage from './components/ContactPage/Contactpage'

function App() {
  return (
    <>
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Homepage/>} />
          <Route path='/about' element = {<Aboutpage/>} />
          <Route path='/contact' element = {<Contactpage/>} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
