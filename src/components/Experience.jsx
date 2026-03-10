import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const workEntries = [
  {
    company: "Amano",
    role: "Co-Founder",
    date: "Aug 2025 – Present",
    desc: "Building the world's most accessible hearing aid. Hearing loss affects 1 in 5 globally, most will never afford what already exists. Working with Harvard Medical School and St. Joseph's Healthcare Hamilton.",
  },
  {
    company: "Harvard Medical School & MGH",
    role: "Biomedical Engineer",
    date: "Apr 2025 – Present",
    desc: "Using ML and finite element analysis to model how the musculoskeletal system responds to force. Automating CT-to-FEA pipelines so orthopedic surgeons can make better decisions before entering the OR.",
  },
  {
    company: "AlgoSurg (YC W18)",
    role: "Software Engineer",
    date: "Nov 2025 – Present",
    desc: "Automating the hours surgeons spend on pre-operative planning. Building AI-driven surgical simulation and decision-support systems.",
  },
  {
    company: "University Health Network",
    role: "ML Researcher",
    date: "Nov 2025 – Present",
    desc: "Building models that predict when a rehabilitation patient is improving, plateauing, or quietly declining, before the clinical team notices.",
  },
  {
    company: "Johns Hopkins University",
    role: "Computational Neuroscience Researcher",
    date: "Oct 2024 – Jan 2026",
    desc: "ML models for brain function and disease in the NeuroData Lab. Worked on BCI signal synchronization with the Crone Lab. Contributed to publications on BCI technology.",
  },
  {
    company: "RBC Borealis",
    role: "ML Researcher",
    date: "Sep 2025 – Dec 2025",
    desc: "Volumetric brain analysis using ML for early neurodegeneration detection. Developed scalable pipelines for large-scale neuroimaging datasets.",
  },
  {
    company: "Hamilton Health Sciences",
    role: "Clinical Researcher",
    date: "Jun 2024 – Sep 2025",
    desc: "Multi-centre study on hip/knee arthroplasty wait times under Dr. Thomas Wood. Managed a database covering 3,000 patients. Built ML models predicting functional outcomes with 85%+ accuracy.",
  },
  {
    company: "Headstarter AI",
    role: "Software Engineering Fellow",
    date: "Jul 2024 – Sep 2024",
    desc: "Built 5+ production apps in 7 weeks using Next.js, OpenAI, and Stripe. Reached 1,000+ users. Mentored by engineers from Amazon, Bloomberg, and Capital One.",
  },
  {
    company: "Shoppers Drug Mart",
    role: "Pharmacy Assistant",
    date: "Sep 2022 – Present",
    desc: "Dispensing 1,000+ prescriptions weekly. The closest I get to patients before medical school, and a daily reminder of why the system needs better tools.",
  },
];

const communityEntries = [
  {
    company: "The Frequency",
    role: "Writer",
    date: "Sep 2024 – Present",
    desc: "Writing research-backed articles for McMaster Engineering's student journal. Making technical ideas legible to people who almost understand them.",
    link: "https://macengsociety.ca/pdfs/frequency/TheFrequency_fall_2024.pdf",
  },
  {
    company: "Trillium Health Partners",
    role: "Dialysis Volunteer",
    date: "May 2024 – Present",
    desc: "Supporting outpatient visits at the Speakman Renal Dialysis Care Centre. Patient intake, record management, care coordination.",
  },
  {
    company: "Juravinski / Royal Oak / Renal Care Centre",
    role: "Clinical Shadowing",
    date: "Sep 2022 – Present",
    desc: "Orthopaedics with Dr. Thomas Wood. Family Medicine with Dr. Evis Skendaj. Nephrology with Dr. Sharn Bhandal.",
  },
  {
    company: "Eclipto Network",
    role: "Biomedical Team Lead",
    date: "Mar 2024 – Jul 2024",
    desc: "Led research projects at the intersection of life science and engineering. Ran technical reviews and brainstorming sessions.",
  },
  {
    company: "Mathstronauts",
    role: "STEM Teaching Assistant",
    date: "Jan 2020 – Feb 2022",
    desc: "Taught kids programming, 3D modeling, and CAD. The goal was never the project, it was the moment they stopped asking for permission to build.",
  },
];

const tabs = {
  work: { label: "Work", data: workEntries },
  community: { label: "Community", data: communityEntries },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const roleColor = (role) => {
  const r = role.toLowerCase();
  if (r.includes("founder") || r.includes("co-founder")) return "text-[#d4a96a]";
  if (r.includes("research")) return "text-[#7ab4d4]";
  if (r.includes("engineer") || r.includes("fellow")) return "text-[#7ac8a0]";
  if (r.includes("clinical") || r.includes("shadow") || r.includes("dialysis")) return "text-[#b094d4]";
  return "text-[#b0aeac]";
};

const Entry = ({ item }) => (
  <motion.div variants={fadeUp} className="mb-14">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
      <div>
        <p className="text-[#e5dfd4] text-[16px] font-medium leading-tight">{item.company}</p>
        <p className={`text-[12px] font-medium mt-1.5 ${roleColor(item.role)}`}>{item.role}</p>
      </div>
      <p className="text-[#7a7876] text-[12px] font-normal shrink-0 sm:mt-0.5">{item.date}</p>
    </div>
    <p className="text-[#a8a6a4] text-[15px] font-normal leading-[1.9]">{item.desc}</p>
    {item.link && (
      <a href={item.link} target="_blank" rel="noopener noreferrer"
        className="inline-block mt-3 text-[12px] text-[#7ab4d4] hover:text-[#c8c2b8] transition-colors duration-200">
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
            style={{ color: activeTab === key ? "#c8c2b8" : "#555250" }}
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
