import React , {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import Recipes from "./pages/Recipes"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Recipe from "./pages/Recipe"

function App() {
  const [language, setLanguage] = useState(false);
  return (
    <Router>
      <Navbar language = {language} setLanguage = {setLanguage} />
      <Routes>
        <Route path="/TwoBakers/" element={<Home language = {language}/>} />
        <Route path="/TwoBakers/Recipes" element={<Recipes language = {language}/>} />
        <Route path="/TwoBakers/About" element={<About language = {language}/>} />
        <Route path="/TwoBakers/Contact" element={<Contact language = {language}/>} />
        <Route path="/TwoBakers/Recipe" element={<Recipe language = {language}/>} />
      </Routes>
      <Footer language = {language}/>
    </Router>
  )
}

export default App

