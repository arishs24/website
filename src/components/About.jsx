import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const items = [
  "founder of amano. building the world's most accessible hearing aid. hearing loss affects 1 in 5 globally.",
  "biomedical engineer at harvard medical school and mgh. using ml and fea to model how the musculoskeletal system responds to force, so surgeons can make better decisions before entering the or.",
  "software engineer at algosurg (yc w18). automating the hours surgeons spend on pre-operative planning.",
  "ml researcher at university health network. predicting when rehabilitation patients are improving, plateauing, or quietly declining.",
  "co-founder of neurite. first ml tool for psp detection and tau protein modeling. nebius ai discovery award winner. twice published.",
  "founder of manar. top-100 religion app on the app store. built focus mode, layered guidance, and reward mechanics for people trying to build consistency in prayer.",
  "1st place healthcare at hackprinceton, the ivy league's largest hackathon. built synovia in 36 hours.",
  "nebius ai discovery award. jxtx scholar.",
  "1st in canada, waterloo financial literacy competition. 13th worldwide, international research olympiad.",
  "deca top 20 worldwide icdc. provincial champion.",
  "published across orthopaedics, neuroimaging, hearing health, and drug delivery.",
  "founded aquaboost (backed by buildspace / yc). exit 2023.",
  "founded studywise academy. grew to 50+ students across institutional partnerships.",
];

const About = () => {
  return (
    <div>

      <motion.p
        className="text-[#888888] text-[16px] leading-[1.85] mb-14"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        19, from oakville, ontario. i don't separate research from product from clinical work. they're the same question at different levels of abstraction. the urgency is personal. my family's encounter with neurodegeneration is what got me here.
      </motion.p>

      <motion.p
        className="text-[#888888] text-[15px] mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        some things i've done:
      </motion.p>

      <motion.ul
        className="space-y-5"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.03 }}
      >
        {items.map((text, i) => (
          <motion.li
            key={i}
            variants={fadeUp}
            className="text-[#666666] text-[15px] leading-[1.85] flex gap-3"
          >
            <span className="text-[#333333] shrink-0 mt-[2px]">*</span>
            <span>{text}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        className="text-[#888888] text-[15px] leading-[1.85] mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        i want to practice medicine, but i can't ignore what's possible with computation. the goal is to build tools that make anything less than precision unacceptable, from the inside.
      </motion.p>

    </div>
  );
};

export default SectionWrapper(About, "about");
