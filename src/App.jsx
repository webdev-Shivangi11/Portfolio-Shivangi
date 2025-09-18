import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import About from './sections/About'
import Services from './sections/Services'
function App() {
  return (
    <div className="relative w-screen min-h-screen  bg-red-50 overflow-auto">
      <Navbar />
      <Hero/>
      <ServiceSummary/>
      <Services/>
      <About/>
      <section className="min-h-screen bg-amber-400 "/>
      <section className="min-h-screen bg-amber-900"/>
    </div>
  )
}

export default App
