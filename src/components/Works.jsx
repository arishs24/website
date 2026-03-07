import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import styles from "../styles";
import { github } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects, universityProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const tabs = {
  projects: {
    label: "featured builds",
    accent: "#A78BFA",
    description: "ai agents, clinical tooling, and hardware/software mixes built outside the classroom.",
    data: projects,
  },
  universityProjects: {
    label: "studio & capstone",
    accent: "#34D399",
    description: "biomed engineering design sprints from mcmaster's IBH program.",
    data: universityProjects,
  },
};

const ProjectCard = ({
  index,
  project,
  accent,
  isUniversityProject,
  onClick,
}) => {
  const { name, description, tags, image, source_code_link } = project;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.8)}
      className="bg-[#0f1222]/80 border border-white/5 rounded-2xl p-5 flex flex-col gap-4 shadow-lg shadow-black/40 backdrop-blur"
    >
      <div className="relative h-56 w-full overflow-hidden rounded-2xl">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {!isUniversityProject && (
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="absolute top-4 right-4 bg-white/90 text-black text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2 hover:bg-white"
          >
            <img src={github} alt="github" className="w-4 h-4" />
            repo
          </button>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">build</p>
            <h3 className="text-white text-2xl font-semibold">{name}</h3>
          </div>
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: accent }}
          >
            {isUniversityProject ? "studio" : "solo"}
          </span>
        </div>
        <p className="text-white/70 text-[15px] leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/70"
          >
            #{tag.name}
          </span>
        ))}
      </div>

      {isUniversityProject && (
        <button
          onClick={onClick}
          className="mt-auto text-sm text-white/80 underline hover:text-white text-left"
        >
          deep dive → 
        </button>
      )}
    </motion.div>
  );
};

const Works = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const navigate = useNavigate();
  const current = tabs[activeTab];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p id="projects" className={styles.sectionSubText}>ship logs</p>
        <h2 className={styles.sectionHeadText}>{current.label}.</h2>
        <p className="mt-4 text-white/70 max-w-3xl">{current.description}</p>
      </motion.div>

      <div className="flex flex-wrap gap-3 mt-10">
        {Object.entries(tabs).map(([key, tab]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2 rounded-full text-sm uppercase tracking-[0.2em] transition-all ${
              activeTab === key
                ? "bg-white text-black shadow-xl shadow-black/40"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {current.data && current.data.length > 0 ? (
          current.data.map((project, index) => (
            <ProjectCard
              key={`${current.label}-${project.name}-${index}`}
              index={index}
              project={project}
              accent={current.accent}
              isUniversityProject={activeTab === "universityProjects"}
              onClick={() =>
                navigate(`/project/${index}`, { state: { project } })
              }
            />
          ))
        ) : (
          <p className="text-white/60">no projects here yet.</p>
        )}
      </div>

      {/* Always-visible university projects section so they don't disappear */}
      {activeTab === "projects" && tabs.universityProjects.data?.length > 0 && (
        <div className="mt-16">
          <h3 className="text-white text-2xl font-semibold mb-4">
            university projects.
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-3xl">
            studio + capstone work from mcmaster's IBH program — the hands-on design side of my degree.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {tabs.universityProjects.data.map((project, index) => (
              <ProjectCard
                key={`university-${project.name}-${index}`}
                index={index}
                project={project}
                accent={tabs.universityProjects.accent}
                isUniversityProject={true}
                onClick={() =>
                  navigate(`/project/${index}`, { state: { project } })
                }
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
