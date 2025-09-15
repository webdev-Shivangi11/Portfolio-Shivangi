import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

function App() {
  return (
    <div className="relative w-screen min-h-screen  overflow-auto">
      <Navbar />
      <Hero/>
      <section className="min-h-screen bg-amber-400 "/>
      <section className="min-h-screen bg-amber-900"/>
    </div>
  )
}

export default App
