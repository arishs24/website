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

const Gold   = ({ children }) => <span className="text-[#a07838] font-semibold">{children}</span>;
const Blue   = ({ children }) => <span className="text-[#2878aa] font-semibold">{children}</span>;
const Green  = ({ children }) => <span className="text-[#2a8a56] font-semibold">{children}</span>;
const Purple = ({ children }) => <span className="text-[#6a44a4] font-semibold">{children}</span>;
const Bold   = ({ children }) => <span className="text-[#1a1917] font-semibold">{children}</span>;

const tagColors = {
  Startup:    { bg: "bg-[#fdf0d8]", text: "text-[#a07838]" },
  Research:   { bg: "bg-[#d8eef8]", text: "text-[#2878aa]" },
  Clinical:   { bg: "bg-[#d8f2e8]", text: "text-[#2a8a56]" },
  Fellowship: { bg: "bg-[#ede0f8]", text: "text-[#6a44a4]" },
  App:        { bg: "bg-[#f8e0e0]", text: "text-[#aa4444]" },
};

const Logo = ({ src, initial, bg }) => {
  const [err, setErr] = useState(false);
  if (!src || err) {
    return (
      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[13px] font-semibold shrink-0"
        style={{ background: bg || "#f0ede6", color: "#666462" }}>
        {initial}
      </div>
    );
  }
  return <img src={src} onError={() => setErr(true)} alt="" className="w-9 h-9 rounded-xl object-cover shrink-0" />;
};

const current = [
  {
    org: "Amano",
    link: "https://amanolabs.com",
    logo: null, initial: "A", bg: "#fdf0d8", tag: "Startup",
    desc: <><Gold>Founder.</Gold> Building the world's most <Bold>accessible hearing aid</Bold>. Hearing loss affects <Green>1 in 5 globally</Green> — most will never afford what already exists. Working with <Blue>Harvard Medical School</Blue> and St. Joseph's Healthcare Hamilton.</>,
  },
  {
    org: "Harvard Medical School & MGH",
    logo: "/harvard.png", initial: "H", bg: "#ffe8e8", tag: "Research",
    desc: <><Gold>Biomedical Engineer.</Gold> Using <Bold>ML and FEA</Bold> to model how the musculoskeletal system responds to force, so <Blue>orthopedic surgeons</Blue> can make better decisions before entering the OR.</>,
  },
  {
    org: "AlgoSurg (YC W18)",
    logo: "https://logo.clearbit.com/algosurg.com", initial: "Al", bg: "#d8eef8", tag: "Research",
    desc: <><Gold>Software Engineer.</Gold> Automating the hours surgeons spend on <Bold>pre-operative planning</Bold>. Building AI-driven surgical simulation and decision-support systems.</>,
  },
  {
    org: "University Health Network",
    logo: "https://logo.clearbit.com/uhn.ca", initial: "U", bg: "#d8eef8", tag: "Research",
    desc: <><Gold>ML Researcher.</Gold> Building models that predict when a rehabilitation patient is <Bold>improving, plateauing, or quietly declining</Bold> — before the clinical team notices.</>,
  },
  {
    org: "Neurite",
    logo: null, initial: "N", bg: "#d8f2e8", tag: "Startup",
    desc: <><Gold>Co-Founder.</Gold> Built the <Bold>first ML tool for PSP detection</Bold> and tau protein modeling. <Purple>Nebius AI Discovery Award</Purple> winner. <Blue>Twice published.</Blue></>,
  },
  {
    org: "Manar",
    logo: "/islam.png", initial: "M", bg: "#f8e0e0", tag: "App",
    desc: <><Gold>Founder.</Gold> <Green>Top-100 religion app</Green> on the App Store. Focus mode, layered guidance, and reward mechanics for people trying to build consistency in prayer.</>,
  },
];

const highlights = [
  <><Gold>1st Place Healthcare</Gold> at HackPrinceton, <Bold>the Ivy League's largest hackathon</Bold>. Built Synovia in <Green>36 hours</Green>.</>,
  <><Purple>Nebius AI Discovery Award.</Purple> <Blue>JXTX Scholar.</Blue></>,
  <><Green>1st in Canada</Green>, Waterloo Financial Literacy Competition. <Green>13th Worldwide</Green>, International Research Olympiad.</>,
  <><Gold>DECA Top 20 Worldwide ICDC.</Gold> Provincial Champion.</>,
  <><Bold>Published</Bold> across orthopaedics, neuroimaging, hearing health, and drug delivery.</>,
  <><Gold>Founded StudyWise Academy.</Gold> Grew to <Green>50+ students</Green> across institutional partnerships.</>,
];

const About = () => (
  <div>

    <motion.div className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
      <p className="text-[#aaa8a6] text-[11px] uppercase tracking-[0.2em] mb-10 font-normal">Currently</p>

      <motion.ul className="space-y-10" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.03 }}>
        {current.map((item, i) => {
          const tag = tagColors[item.tag];
          return (
            <motion.li key={i} variants={fadeUp} className="flex gap-4">
              <Logo src={item.logo} initial={item.initial} bg={item.bg} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="text-[#1a1917] text-[15px] font-medium leading-tight hover:text-[#a07838] transition-colors duration-200">
                      {item.org} ↗
                    </a>
                  ) : (
                    <span className="text-[#1a1917] text-[15px] font-medium leading-tight">{item.org}</span>
                  )}
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${tag.bg} ${tag.text}`}>{item.tag}</span>
                </div>
                <p className="text-[#555452] text-[14px] font-normal leading-[1.9]">{item.desc}</p>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>

    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
      <p className="text-[#aaa8a6] text-[11px] uppercase tracking-[0.2em] mb-10 font-normal">Highlights</p>

      <motion.ul className="space-y-6" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.03 }}>
        {highlights.map((item, i) => (
          <motion.li key={i} variants={fadeUp} className="flex gap-3 text-[15px] font-normal leading-[1.9]">
            <span className="text-[#ccc9c6] shrink-0 mt-[3px]">*</span>
            <span className="text-[#555452]">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>

    <motion.p className="text-[#555452] text-[15px] font-normal leading-[1.9] mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      I want to practice medicine, but I can't ignore what's possible with computation. The goal is to build tools that make <Bold>anything less than precision unacceptable</Bold>, from the inside.
    </motion.p>

  </div>
);

export default SectionWrapper(About, "about");
