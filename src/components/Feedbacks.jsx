import React from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";

const EducationCard = ({ index, school, degree, field, date, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.2, 0.8)}
    className="bg-[#0f1222]/80 border border-white/5 rounded-2xl p-6 flex items-center gap-5 shadow-lg shadow-black/40 backdrop-blur"
  >
    <img
      src={image}
      alt={school}
      className="w-20 h-20 rounded-2xl object-cover ring-2 ring-white/10"
    />
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{date}</p>
      <h3 className="text-white text-2xl font-semibold mt-1">{school}</h3>
      <p className="text-[#A78BFA] font-semibold text-sm mt-2">{degree}</p>
      <p className="text-white/70 text-sm">{field}</p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <section className="mt-12">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>academic trail</p>
        <h2 className={styles.sectionHeadText}>education.</h2>
        <p className="mt-4 text-white/70 max-w-2xl">
          programs, cohorts, and communities where i'm studying health sciences + engineering.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => (
          <EducationCard key={edu.school} index={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "");
