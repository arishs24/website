import React from "react";
import { motion } from "framer-motion";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arishshahab/" },
  { label: "GitHub", href: "https://github.com/arishs24" },
  { label: "Schedule a call", href: "https://calendly.com/arish-shahab1/30min" },
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
        className="text-[#9a9896] text-[16px] leading-[1.85] mb-12"
      >
        Studying Integrated Biomedical Engineering and Health Sciences at McMaster University. Working toward medicine, and building things along the way.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-12"
      >
        <p className="font-heading italic text-[#6a6866] text-[17px] leading-relaxed">
          "Whoever saves one life, it is as if he had saved all of mankind."
        </p>
        <p className="text-[#555250] text-[12px] mt-2 tracking-wide">— Quran 5:32</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="flex flex-wrap gap-x-7 gap-y-3"
      >
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#5a5856] hover:text-[#c8c2b8] transition-colors duration-300"
          >
            {label} ↗
          </a>
        ))}
      </motion.div>

    </section>
  );
};

export default Hero;
