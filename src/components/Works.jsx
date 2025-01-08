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
  isUniversityProject,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={!isUniversityProject ? null : onClick} // Allow click only for university projects
      className={`cursor-pointer group ${!isUniversityProject && "hover:shadow-2xl"}`}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* GitHub Icon (Visible only for projects) */}
          {!isUniversityProject && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover opacity-0 group-hover:opacity-100 transition-opacity">
              <div
                onClick={(e) => {
                  e.stopPropagation(); // Prevent parent click
                  window.open(source_code_link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>

          {/* "Click for more info" (Visible only for university projects) */}
          {isUniversityProject && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-4 text-sm text-[#915EFF] underline hover:text-white transition-colors"
              onClick={onClick}
            >
              Click for more info
            </motion.button>
          )}
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <motion.p
              whileHover={{ scale: 1.1 }}
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </motion.p>
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
      {/* Header */}
      <motion.div variants={textVariant()}>
        <p id="projects" className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      {/* Section Tabs */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setActiveSection("projects")}
          className={`px-4 py-2 text-white rounded-lg ${
            activeSection === "projects" ? "bg-[#915EFF]" : "bg-gray-500"
          } hover:scale-105 transition-transform`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveSection("universityProjects")}
          className={`px-4 py-2 text-white rounded-lg ${
            activeSection === "universityProjects"
              ? "bg-[#915EFF]"
              : "bg-gray-500"
          } hover:scale-105 transition-transform`}
        >
          University Projects
        </button>
      </div>

      {/* Projects Display */}
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
              }
              isUniversityProject={activeSection === "universityProjects"}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
