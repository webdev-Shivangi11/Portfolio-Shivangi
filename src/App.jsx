import React, { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import About from './sections/About'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack' 
import Contact from './sections/Contact'
import Skills from './sections/Skills'
function App() {
  
  return (
    <div className="relative w-screen min-h-screen  bg-gray-200 overflow-auto">
      <Navbar />
      <Hero/>
      <ServiceSummary/>
      <About/>
      <TechStack/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default App
