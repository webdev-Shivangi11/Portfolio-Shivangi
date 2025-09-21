import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import photo from "../assets/img.svg"
gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const About = () => {

  const aboutRef = useRef(null);
  const aboutText="My approach combines clean design, smooth interactions, and thoughtful details to ensure every project feels both visually striking and highly functional. Whether it’s designing a portfolio, building a business website, or shaping a brand’s online presence, I focus on creating work that not only looks good but also connects with people in a meaningful way."

  useGSAP(() => {
    // Text fade effect
    SplitText.create(".about-text", {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, { opacity: 0.25 }); // set initial opacity

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1
          },
        });
      },
    });
  }, { scope: aboutRef });

  return (
    <>
      <div ref={aboutRef} className='h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] relative z-10 p-10'>
          {/* Text container */}
          <div className='about-text  w-1/2 main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-[40px] 2xl:text-5xl leading-[1.25]'>
            <div className='w-1/2'><img src={photo} alt="" /></div>
{aboutText}            
            </div>
      </div>
    </>
  )
}

export default About