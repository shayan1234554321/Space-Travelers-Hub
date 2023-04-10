import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import Navbar from './components/Navbar';


const  App = () => {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Rockets</h1>} />
        <Route path="/missions" element={<h1>Missions</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
