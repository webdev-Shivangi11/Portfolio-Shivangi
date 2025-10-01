import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText'; 
import img from "../assets/img.svg"


gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const split = SplitText.create('.about-text', {
      type: 'lines, chars',
    });

    gsap.set(split.chars, { opacity: 0.2, y: 20 });

    gsap.to(split.chars, {
      opacity: 1,
      y: 0,
      stagger: 0.04,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
        end: 'center center',
        scrub: true,
        
      },
      // ease:"power1.inOut"
    });
  }, { scope: aboutRef });

  return (
    <section
      id="about"
      className="min-h-screen w-full overflow-hidden bg-black rounded-tl-[60px] rounded-tr-[60px] relative z-10 flex flex-col gap-10 items-center px-6 lg:px-20 py-16"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-10 text-white">
        About
      </h1>
<div className='flex flex-col xl:flex-row gap-10'>
  
      <div ref={aboutRef} className="w-full max-w-5xl">
        <p className="about-text text-amber-800 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed  text-bold font-heading  text-center">
          My approach combines clean design, smooth interactions, and thoughtful details to ensure every project feels both visually striking and highly functional. Whether it’s designing a portfolio, building a business website, or shaping a brand’s online presence, I focus on creating work that not only looks good but also connects with people in a meaningful way.
        </p>
      </div>
           <div className=''><img src={img}   alt="Sk" /></div>
   
</div>
    </section>
  );
};

export default About;

// import React, { useRef } from 'react'
// import { gsap } from "gsap";
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SplitText } from "gsap/SplitText"; 
// import BlurText from '../components/BlurText';


// gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

// const About = () => {

//   const aboutRef = useRef(null);

//   useGSAP(() => {
//     // Text fade effect
//     SplitText.create(".about-text", {
//       type: "lines, chars",
//       onSplit(self) {
//         gsap.set(self.chars, { opacity: 0.25 }); // set initial opacity

//         gsap.to(self.chars, {
//           opacity: 1,
//           stagger: 0.05,
//           scrollTrigger: {
//             trigger: aboutRef.current,
//             start: "top 70%",
//             end: "center center",
//             scrub: 1
//           },
//         });
//       },
//     });
//   }, { scope: aboutRef });

//   return (
//     <>
//  <section id="about" className="h-dvh w-screen overflow-x-hidden stack flex  bg-white rounded-tl-[60px] rounded-tr-[60px] relative z-10">
//     <h1 className='text-5xl  text-center banner-text-responsive font-serif p-10'>About</h1>
    
// {/* right part */}
     
//       <div ref={aboutRef} className='h-auto'>
//           <div className='about-text main-container py-7 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-[40px] 2xl:text-5xl leading-[1.25]'>My approach combines clean design, smooth interactions, and thoughtful details to ensure every project feels both visually striking and highly functional. Whether it’s designing a portfolio, building a business website, or shaping a brand’s online presence, I focus on creating work that not only looks good but also connects with people in a meaningful way.</div>
//       </div>
//           </section>
//     </>
//   )
// }

// export default About