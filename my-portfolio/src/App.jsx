import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {
  
  return (
    <>
    <Navbar/>
    <Profile/>
    <About/>
    <Projects/>
    <Skills/>
    </>
  )
}

export default App
