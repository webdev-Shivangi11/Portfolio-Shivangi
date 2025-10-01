import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
function App() {
  return (
    <div className="relative w-screen min-h-screen  bg-yellow-100 overflow-auto">
      <Navbar />
      <Hero/>
      <ServiceSummary/>
      <About/>
      {/* <Services/> */}
      <Projects/>
      {/* <SkillBox/> */}

      <Skills/>
      <section className="min-h-screen bg-amber-400 "/>
      <section className="min-h-screen bg-amber-900"/>
    </div>
  )
}

export default App
