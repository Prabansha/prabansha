"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAngular,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About Me",
  description:
    "I am a Junior Software Engineer with a passion for full-stack development and a strong foundation in technologies like Angular, React, and Spring Boot. I thrive on solving complex problems and creating user-friendly applications.",
  info: [
    { fieldName: "Name", fieldValue: "Prabansha" },
    { fieldName: "Phone", fieldValue: "(+94) 71 760 6330" },
    { fieldName: "Address", fieldValue: "Matara" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English, Sinhala" },
  ],
};

// experience data
const experience = {
  title: "My Experience",
  description:
    "Junior Software Engineer with expertise in full-stack development, skilled in Angular, React, Spring Boot, and MySQL. Proven ability to create responsive applications and enhance user experiences through effective problem-solving and collaboration.",
  items: [
    { company: "SoftHub Pvt Ltd", position: "Full Stack Developer", duration: "2023 - Present" },
    { company: "CodeLab Pvt Ltd", position: "Software Engineer", duration: "2021 - 2023" },
    { company: "WebFix Pvt Ltd", position: "Junior Developer", duration: "2020 - 2021" },
  ],
};

// education data
const education = {
  title: "My Education",
  description:
    "I am a Junior Software Engineer with a passion for full-stack development and a strong foundation in technologies like Angular, React, and Spring Boot. I thrive on solving complex problems and creating user-friendly applications.",
  items: [
    { institute: "SLIATE", degree: "HND in Information Technology", duration: "2022" },
    { institute: "UCSC", degree: "Bachelor of IT", duration: "2020" },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Proficient in full-stack development, including Angular, React, Spring Boot, and MySQL. Strong understanding of data structures, algorithms, and software development methodologies.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaAngular />, name: "Angular" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institute}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                    >
                      {skill.icon}
                      <span className="text-white/60">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About Us */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {about.info.map((info, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[120px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{info.fieldName}</span>
                      <h3 className="text-xl text-center lg:text-left">{info.fieldValue}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
