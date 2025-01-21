import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'

function App() {
  return (
    <>
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Homepage/>} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
