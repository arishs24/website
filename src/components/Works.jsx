import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import styles from "../styles";
import { github } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects, universityProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  onClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <p className="mt-2 text-gray-400 text-[12px] italic">
            Click for more info
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const navigate = useNavigate();

  const displayedProjects =
    activeSection === "projects" ? projects : universityProjects;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setActiveSection("projects")}
          className={`px-4 py-2 text-white rounded-lg ${
            activeSection === "projects" ? "bg-[#915EFF]" : "bg-gray-500"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveSection("universityProjects")}
          className={`px-4 py-2 text-white rounded-lg ${
            activeSection === "universityProjects"
              ? "bg-[#915EFF]"
              : "bg-gray-500"
          }`}
        >
          University Projects
        </button>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {displayedProjects.map((project, index) => (
          <div
            key={`project-${index}`}
            className="sm:w-[45%] md:w-[30%] w-full"
          >
            <ProjectCard
              index={index}
              {...project}
              onClick={() =>
                navigate(`/project/${index}`, { state: { project } })
                //navigate("/dp1")

              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
