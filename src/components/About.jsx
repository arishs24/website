import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const tagColors = {
  Startup:    { bg: "bg-[#1e1507]", text: "text-[#c8a46e]" },
  Research:   { bg: "bg-[#071219]", text: "text-[#6ea8c8]" },
  Clinical:   { bg: "bg-[#071a0f]", text: "text-[#6ec8a0]" },
  Fellowship: { bg: "bg-[#13071a]", text: "text-[#a87ac8]" },
  App:        { bg: "bg-[#1a0709]", text: "text-[#c87a7a]" },
};

const Logo = ({ src, initial, bg }) => {
  const [err, setErr] = useState(false);
  if (!src || err) {
    return (
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-medium shrink-0"
        style={{ background: bg || "#1a1a1a", color: "#c8c2b8" }}
      >
        {initial}
      </div>
    );
  }
  return (
    <img
      src={src}
      onError={() => setErr(true)}
      alt=""
      className="w-8 h-8 rounded-lg object-cover shrink-0 bg-[#111]"
    />
  );
};

const current = [
  {
    org: "Amano",
    logo: null,
    initial: "A",
    bg: "#1a1507",
    tag: "Startup",
    desc: "Founder. Building the world's most accessible hearing aid. Hearing loss affects 1 in 5 globally. Working with Harvard Medical School and St. Joseph's Healthcare Hamilton.",
  },
  {
    org: "Harvard Medical School & MGH",
    logo: "/harvard.png",
    initial: "H",
    bg: "#1a0000",
    tag: "Research",
    desc: "Biomedical Engineer. Using ML and FEA to model how the musculoskeletal system responds to force, so orthopedic surgeons can make better decisions before entering the OR.",
  },
  {
    org: "AlgoSurg (YC W18)",
    logo: "https://logo.clearbit.com/algosurg.com",
    initial: "Al",
    bg: "#071219",
    tag: "Research",
    desc: "Software Engineer. Automating the hours surgeons spend on pre-operative planning.",
  },
  {
    org: "University Health Network",
    logo: "https://logo.clearbit.com/uhn.ca",
    initial: "U",
    bg: "#071219",
    tag: "Research",
    desc: "ML Researcher. Predicting when rehabilitation patients are improving, plateauing, or quietly declining.",
  },
  {
    org: "Neurite",
    logo: null,
    initial: "N",
    bg: "#0d1a0e",
    tag: "Startup",
    desc: "Co-Founder. First ML tool for PSP detection and tau protein modeling. Nebius AI Discovery Award winner. Twice published.",
  },
  {
    org: "Manar",
    logo: "/islam.png",
    initial: "M",
    bg: "#1a0709",
    tag: "App",
    desc: "Founder. Top-100 religion app on the App Store. Focus mode, layered guidance, and reward mechanics for prayer.",
  },
];

const highlights = [
  { bold: "1st Place Healthcare at HackPrinceton", rest: ", the Ivy League's largest hackathon. Built Synovia in 36 hours." },
  { bold: "Nebius AI Discovery Award. JXTX Scholar.", rest: "" },
  { bold: "1st in Canada", rest: ", Waterloo Financial Literacy Competition. 13th Worldwide, International Research Olympiad." },
  { bold: "DECA Top 20 Worldwide ICDC.", rest: " Provincial Champion." },
  { bold: "Published", rest: " across orthopaedics, neuroimaging, hearing health, and drug delivery." },
  { bold: "Founded AquaBoost", rest: " (backed by buildspace / YC). Exit 2023." },
  { bold: "Founded StudyWise Academy.", rest: " Grew to 50+ students across institutional partnerships." },
];

const About = () => {
  return (
    <div>

      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-[#606060] text-[11px] uppercase tracking-[0.2em] mb-10">Currently</p>

        <motion.ul
          className="space-y-9"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.03 }}
        >
          {current.map((item, i) => {
            const tag = tagColors[item.tag];
            return (
              <motion.li key={i} variants={fadeUp} className="flex gap-4">
                <Logo src={item.logo} initial={item.initial} bg={item.bg} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <span className="text-[#c8c2b8] text-[15px] font-normal leading-tight">{item.org}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${tag.bg} ${tag.text}`}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[#787674] text-[14px] leading-[1.85]">{item.desc}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-[#606060] text-[11px] uppercase tracking-[0.2em] mb-10">Highlights</p>

        <motion.ul
          className="space-y-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.03 }}
        >
          {highlights.map((item, i) => (
            <motion.li key={i} variants={fadeUp} className="flex gap-3 text-[15px] leading-[1.85]">
              <span className="text-[#555250] shrink-0 mt-[2px]">*</span>
              <span>
                <span className="text-[#d4cec4]">{item.bold}</span>
                <span className="text-[#787674]">{item.rest}</span>
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.p
        className="text-[#787674] text-[15px] leading-[1.85] mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        I want to practice medicine, but I can't ignore what's possible with computation. The goal is to build tools that make anything less than precision unacceptable, from the inside.
      </motion.p>

    </div>
  );
};

export default SectionWrapper(About, "about");
