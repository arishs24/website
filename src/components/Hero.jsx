import React from "react";
import { motion } from "framer-motion";

const links = [
  { label: "linkedin", href: "https://www.linkedin.com/in/arishshahab/" },
  { label: "github", href: "https://github.com/arishs24" },
  { label: "resume", href: "/resume.pdf" },
  { label: "schedule a call", href: "https://calendly.com/arish-shahab1/30min" },
];

const Hero = () => {
  return (
    <section className="max-w-2xl mx-auto sm:px-16 px-6 pt-40 sm:pt-52 pb-10">

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading text-[#e5dfd4] text-[80px] sm:text-[104px] font-normal leading-[0.95] tracking-tight mb-12"
      >
        Arish<br />Shahab
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-[#888888] text-[16px] leading-[1.85] mb-12"
      >
        i'm studying integrated biomedical engineering and health sciences at mcmaster university. i want to be a physician and i build things along the way.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.55 }}
        className="flex flex-wrap gap-x-7 gap-y-3"
      >
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#3a3a3a] hover:text-[#c8c2b8] transition-colors duration-300"
          >
            {label} ↗
          </a>
        ))}
      </motion.div>

    </section>
  );
};

export default Hero;
