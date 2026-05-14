import React from "react";
import { motion } from "framer-motion";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arishshahab/" },
  { label: "GitHub", href: "https://github.com/arishs24" },
  { label: "Schedule a call", href: "https://calendly.com/arish-shahab1/30min" },
];

const press = [
  {
    source: "McMaster Faculty of Health Sciences",
    title: '"Like a flight simulator for brain surgery" — Arish Shahab takes home health care prize at Princeton.',
    date: "Dec 2025",
    url: "https://healthsci.mcmaster.ca/like-a-flight-simulator-for-brain-surgery-undergrad-arish-shahab-takes-home-health-care-prize-at-princeton-engineering-competition/",
  },
  {
    source: "Education News Canada",
    title: "Undergrad wins at Princeton engineering competition.",
    date: "Dec 16, 2025",
    url: "https://educationnewscanada.com/article/education/level/university/1/1176503/b-like-a-flight-simulator-for-brain-surgery-undergrad-wins-at-princeton-engineering-competition.html",
  },
  {
    source: "X / @SteveOrsini",
    title: "McMaster President Steve Orsini on the HackPrinceton win.",
    date: "2025",
    url: "https://x.com/SteveOrsini/status/2000995669931384966",
  },
  {
    source: "McMaster Faculty of Health Sciences",
    title: "Meet the next generation of medical entrepreneurs.",
    date: "2025",
    url: "https://healthsci.mcmaster.ca/meet-the-next-generation-of-medical-entrepreneurs/",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="max-w-2xl mx-auto sm:px-16 px-6 pt-40 sm:pt-52 pb-10">

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading text-[#1a1917] text-[80px] sm:text-[104px] font-normal leading-[0.95] tracking-tight mb-12"
      >
        Arish<br />Shahab
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-[#555452] text-[16px] font-normal leading-[1.9] mb-12"
      >
        Studying <span className="text-[#1a1917] font-medium">Integrated Biomedical Engineering and Health Sciences</span> at <span className="text-[#2878aa] font-medium">McMaster University</span>. Working toward medicine, and building things along the way.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-12"
      >
        <p className="font-heading italic text-[#bbb9b6] text-[17px] leading-relaxed">
          "Whoever saves one life, it is as if he had saved all of mankind."
        </p>
        <p className="text-[#ccc9c6] text-[12px] mt-2 tracking-wide">— Quran 5:32</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="flex flex-wrap gap-x-7 gap-y-3 mb-20"
      >
        {links.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="text-[13px] text-[#aaa8a6] hover:text-[#1a1917] transition-colors duration-300">
            {label} ↗
          </a>
        ))}
      </motion.div>

      {/* Newspaper press section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {/* Masthead */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-[#e8e4dc]" />
          <p className="font-heading text-[#bbb9b6] text-[11px] uppercase tracking-[0.35em]">
            In the Press
          </p>
          <div className="h-px flex-1 bg-[#e8e4dc]" />
        </div>

        {/* Newspaper grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {press.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className={`group p-5 border-[#e8e4dc] hover:bg-[#f5f2ec] transition-colors duration-300 ${
                i % 2 === 0 ? "sm:border-r" : ""
              } ${
                i < 2 ? "border-b" : ""
              } border`}
            >
              <p className="text-[#aaa8a6] text-[9px] uppercase tracking-[0.2em] font-medium mb-3">
                {item.source}
              </p>
              <p className="font-heading text-[#444240] text-[16px] leading-snug mb-4 group-hover:text-[#1a1917] transition-colors duration-300">
                {item.title}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-[#ccc9c6] text-[10px] tracking-wide">{item.date}</p>
                <p className="text-[#a07838] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  Read ↗
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="h-px bg-[#e8e4dc] mt-0" />
      </motion.div>

    </section>
  );
};

export default Hero;
