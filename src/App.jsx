import React, { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Skills from './sections/Skills' 
import Contact from './sections/Contact'
function App() {
  
  return (
    <div className="relative w-screen min-h-screen  bg-yellow-100 overflow-auto">
      <Navbar />
      <Hero/>
      <ServiceSummary/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>

    </div>
  )
}

export default App
