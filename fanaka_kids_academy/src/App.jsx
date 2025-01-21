import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div>
      <Router>
        <Navbar />
        <Routes>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
