import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) => function HOC() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.03 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-2xl mx-auto sm:px-16 px-6 pt-20 pb-32 relative z-0"
    >
      <span className="hash-span" id={idName}>&nbsp;</span>
      <Component />
    </motion.section>
  );
};

export default SectionWrapper;
