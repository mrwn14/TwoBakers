import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/TwoBakers/" element={<Home />}></Route>

      </Routes>
    </Router>
  )
}

export default App
