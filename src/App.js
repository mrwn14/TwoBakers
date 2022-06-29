import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import Recipes from "./pages/Recipes"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
