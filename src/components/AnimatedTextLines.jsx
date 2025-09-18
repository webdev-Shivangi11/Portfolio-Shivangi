import { useGSAP } from "@gsap/react";
import { useRef } from "react"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const AnimatedTextLines = ( {text,className }) => {
    const containerRef=useRef(null); 
    const lineRefs =useRef([]);
    const lines=text.split("\n").filter((line)=>line.trim()!==
    "");
useGSAP(()=>{
    if(lineRefs.current.length>0){
        gsap.from(lineRefs.current,{
            y:100,
            duration:1,
            opacity:0,
            stagger:0.3,
        ease:"back.out",
    scrollTrigger:{
        trigger:containerRef.current,
    }
    })
    }
});
 

return (
    <div ref={containerRef} className={`overflow-hidden inline-block ${className}`}>
        {lines.map((line,index)=>(
            <div key={index}
            ref={(el)=>(lineRefs.current[index]=el  )}
            className="block leading-relaxed tracking-wide text-pretty">
                <span >{line}</span>
            </div>
        ))}
    </div>
)
}
