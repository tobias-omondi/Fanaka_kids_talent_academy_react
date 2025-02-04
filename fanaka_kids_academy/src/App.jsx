import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Aboutpage from './components/AboutPage/Aboutpage'

function App() {
  return (
    <>
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Homepage/>} />
          <Route path='/about' element = {<Aboutpage/>} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
