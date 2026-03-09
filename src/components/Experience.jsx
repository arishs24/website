import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const workEntries = [
  {
    company: "Amano",
    role: "co-founder",
    date: "aug 2025 – present",
    desc: "building the world's most accessible hearing aid. hearing loss affects 1 in 5 globally, most will never afford what already exists. working with harvard medical school and st. joseph's healthcare hamilton.",
  },
  {
    company: "Harvard Medical School & MGH",
    role: "biomedical engineer",
    date: "apr 2025 – present",
    desc: "using ml and finite element analysis to model how the musculoskeletal system responds to force. automating ct-to-fea pipelines so orthopedic surgeons can make better decisions before entering the or.",
  },
  {
    company: "AlgoSurg (YC W18)",
    role: "software engineer",
    date: "nov 2025 – present",
    desc: "automating the hours surgeons spend on pre-operative planning. building ai-driven surgical simulation and decision-support systems.",
  },
  {
    company: "University Health Network",
    role: "ml researcher",
    date: "nov 2025 – present",
    desc: "building models that predict when a rehabilitation patient is improving, plateauing, or quietly declining, before the clinical team notices.",
  },
  {
    company: "Johns Hopkins University",
    role: "computational neuroscience researcher",
    date: "oct 2024 – jan 2026",
    desc: "ml models for brain function and disease in the neurodata lab. worked on bci signal synchronization with the crone lab. contributed to publications on bci technology.",
  },
  {
    company: "RBC Borealis",
    role: "ml researcher",
    date: "sep 2025 – dec 2025",
    desc: "volumetric brain analysis using ml for early neurodegeneration detection. developed scalable pipelines for large-scale neuroimaging datasets.",
  },
  {
    company: "Hamilton Health Sciences",
    role: "clinical researcher",
    date: "jun 2024 – sep 2025",
    desc: "multi-centre study on hip/knee arthroplasty wait times under dr. thomas wood. managed a database covering 3,000 patients. built ml models predicting functional outcomes with 85%+ accuracy.",
  },
  {
    company: "Headstarter AI",
    role: "software engineering fellow",
    date: "jul 2024 – sep 2024",
    desc: "built 5+ production apps in 7 weeks using next.js, openai, and stripe. reached 1,000+ users. mentored by engineers from amazon, bloomberg, and capital one.",
  },
  {
    company: "Shoppers Drug Mart",
    role: "pharmacy assistant",
    date: "sep 2022 – present",
    desc: "dispensing 1,000+ prescriptions weekly. the closest i get to patients before medical school, and a daily reminder of why the system needs better tools.",
  },
];

const communityEntries = [
  {
    company: "The Frequency",
    role: "writer",
    date: "sep 2024 – present",
    desc: "writing research-backed articles for mcmaster engineering's student journal. making technical ideas legible to people who almost understand them.",
    link: "https://macengsociety.ca/pdfs/frequency/TheFrequency_fall_2024.pdf",
  },
  {
    company: "Trillium Health Partners",
    role: "dialysis volunteer",
    date: "may 2024 – present",
    desc: "supporting outpatient visits at the speakman renal dialysis care centre. patient intake, record management, care coordination.",
  },
  {
    company: "Juravinski / Royal Oak / Renal Care Centre",
    role: "clinical shadowing",
    date: "sep 2022 – present",
    desc: "orthopaedics with dr. thomas wood. family medicine with dr. evis skendaj. nephrology with dr. sharn bhandal.",
  },
  {
    company: "Eclipto Network",
    role: "biomedical team lead",
    date: "mar 2024 – jul 2024",
    desc: "led research projects at the intersection of life science and engineering. ran technical reviews and brainstorming sessions.",
  },
  {
    company: "Mathstronauts",
    role: "stem teaching assistant",
    date: "jan 2020 – feb 2022",
    desc: "taught kids programming, 3d modeling, and cad. the goal was never the project, it was the moment they stopped asking for permission to build.",
  },
];

const tabs = {
  work: { label: "work", data: workEntries },
  community: { label: "community", data: communityEntries },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const Entry = ({ item }) => (
  <motion.div variants={fadeUp} className="mb-12">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
      <div>
        <p className="text-[#c8c2b8] text-[16px] font-normal leading-tight">{item.company}</p>
        <p className="text-[#3a3a3a] text-[12px] mt-1.5">{item.role}</p>
      </div>
      <p className="text-[#252525] text-[12px] shrink-0 sm:mt-0.5">{item.date}</p>
    </div>
    <p className="text-[#666666] text-[15px] leading-[1.85]">{item.desc}</p>
    {item.link && (
      <a href={item.link} target="_blank" rel="noopener noreferrer"
        className="inline-block mt-3 text-[12px] text-[#3a3a3a] hover:text-[#c8c2b8] transition-colors duration-200">
        read ↗
      </a>
    )}
  </motion.div>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");
  const current = tabs[activeTab];

  return (
    <div>
      <div className="flex items-center gap-8 mb-14">
        {Object.entries(tabs).map(([key, tab]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className="relative pb-2 text-[13px] transition-colors duration-200"
            style={{ color: activeTab === key ? "#c8c2b8" : "#2e2e2e" }}
          >
            {tab.label}
            {activeTab === key && (
              <motion.div
                layoutId="exp-tab-line"
                className="absolute bottom-0 left-0 right-0 h-px bg-[#c8c2b8]"
                transition={{ type: "spring", stiffness: 320, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <motion.div variants={stagger} initial="hidden" animate="show">
            {current.data.map((item, i) => (
              <Entry key={i} item={item} />
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
