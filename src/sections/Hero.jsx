import React, { useRef } from 'react'

function Hero() {
    const contextRef=useRef(null);
  return (
    <section  id="home" className="min-h-screen bg-blue-400 flex flex-col justify-end">
<div ref={contextRef}>
    <div style={{clippath:"polygon(0 0,100% 0,100% 100%,0 100%"}}>
             <div className="flex flex-col justify-center gap-12 pt-16 sm:gap-16">
                <p className='text-sm  font-light tracking-[0.5rem] uppercase px-10 text=black'>404 no bugs found</p>
                <div className="px-10">
                    <h1 className="flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block">
                        Shivangi Keshari
                    </h1>
                </div>
                </div>    
                </div>
           </div>

    </section   >       
  )
}

export default Hero