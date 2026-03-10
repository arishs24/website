import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects, universityProjects } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const filters = ["Everything", "Builds", "Capstone"];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const ProjectCard = ({ project, category, onClick }) => {
  const { name, description, tags, source_code_link } = project;
  const firstSentence = description.split(/\.\s/)[0].replace(/\.$/, "");

  return (
    <motion.div variants={fadeUp} className="mb-12">
      <div className="flex items-start justify-between gap-4 mb-2">
        <p className="text-[#e5dfd4] text-[16px] font-medium leading-snug">{name}</p>
        <span className="text-[#7a7876] text-[11px] shrink-0 mt-1">{category}</span>
      </div>

      <p className="text-[#a8a6a4] text-[15px] font-normal leading-[1.9] mb-4">
        {firstSentence}.
      </p>

      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
        {tags.slice(0, 3).map((tag) => (
          <span key={tag.name} className="text-[#2a2a2a] text-[11px]">{tag.name}</span>
        ))}
      </div>

      <div className="flex gap-6 text-[12px]">
        {source_code_link && !onClick && (
          <button onClick={() => window.open(source_code_link, "_blank")}
            className="text-[#8a8886] hover:text-[#c8c2b8] transition-colors duration-200">
            GitHub ↗
          </button>
        )}
        {onClick && (
          <button onClick={onClick}
            className="text-[#8a8886] hover:text-[#c8c2b8] transition-colors duration-200">
            Deep dive ↗
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [active, setActive] = useState("everything");
  const navigate = useNavigate();

  const showBuilds = active === "Everything" || active === "Builds";
  const showCapstone = active === "Everything" || active === "Capstone";

  return (
    <div>
      <div className="flex items-center gap-8 mb-14">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="relative pb-2 text-[13px] transition-colors duration-200"
            style={{ color: active === f ? "#c8c2b8" : "#555250" }}
          >
            {f}
            {active === f && (
              <motion.div
                layoutId="works-filter-line"
                className="absolute bottom-0 left-0 right-0 h-px bg-[#c8c2b8]"
                transition={{ type: "spring", stiffness: 320, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div variants={stagger} initial="hidden" animate="show">
            {showBuilds && projects.map((project, i) => (
              <ProjectCard
                key={`build-${i}`}
                project={project}
                category="project"
              />
            ))}

            {showCapstone && (
              <>
                {showBuilds && (
                  <motion.p
                    variants={fadeUp}
                    className="text-[#2a2a2a] text-[10px] uppercase tracking-[0.25em] mt-4 mb-10"
                  >
                    Capstone — McMaster iBioMed
                  </motion.p>
                )}
                {universityProjects.map((project, i) => (
                  <ProjectCard
                    key={`cap-${i}`}
                    project={project}
                    category="capstone"
                    onClick={() => navigate(`/project/${i}`, { state: { project } })}
                  />
                ))}
              </>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Works, "");
