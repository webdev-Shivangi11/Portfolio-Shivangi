import { FaReact, FaGitAlt,FaBootstrap ,FaHtml5,FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill,RiNextjsLine } from "react-icons/ri";
import { SiMongodb , SiExpress ,SiShadcnui,SiRedux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import SkillBox from "../components/SkillBox";

export default function TechStack() {
  return (
   <div className="flex flex-col gap-8   p-4 py-10 ">
    <div className="skill-header  flex flex-col gap-5 justify-center items-center">
      <div className=" text-xl xl:text-2xl">Better than yesterday.</div>
      <div className=" text-5xl xl:text-8xl font-serif">My Tech Stack</div>
    </div>
     <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 ">
 
      <SkillBox Icon={FaHtml5} />
      <SkillBox Icon={FaCss3Alt } />
      <SkillBox Icon={IoLogoJavascript } />
      <SkillBox Icon={FaReact} />
      <SkillBox Icon={RiTailwindCssFill} />
      <SkillBox Icon={SiMongodb } />
      <SkillBox Icon={DiNodejs} />
      <SkillBox Icon={RiNextjsLine} />
      <SkillBox Icon={SiExpress} />
      <SkillBox Icon={FaBootstrap} />
      <SkillBox Icon={SiShadcnui} />
      <SkillBox Icon={SiRedux } />
      <SkillBox Icon={FaGitAlt} />
      
      
    </div>
   </div>
  );
}
