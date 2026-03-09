import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const newsItems = [
  {
    title: "like a flight simulator for brain surgery: arish shahab takes home health care prize at princeton",
    source: "McMaster Faculty of Health Sciences",
    date: "dec 2025",
    url: "https://healthsci.mcmaster.ca/like-a-flight-simulator-for-brain-surgery-undergrad-arish-shahab-takes-home-health-care-prize-at-princeton-engineering-competition/",
  },
  {
    title: "meet the next generation of medical entrepreneurs",
    source: "McMaster Faculty of Health Sciences",
    date: "2025",
    url: "https://healthsci.mcmaster.ca/meet-the-next-generation-of-medical-entrepreneurs/",
  },
  {
    title: "like a flight simulator for brain surgery: undergrad wins at princeton engineering competition",
    source: "Education News Canada",
    date: "dec 16, 2025",
    url: "https://educationnewscanada.com/article/education/level/university/1/1176503/b-like-a-flight-simulator-for-brain-surgery-undergrad-wins-at-princeton-engineering-competition.html",
  },
  {
    title: "1st place in healthcare at hackprinceton",
    source: "LinkedIn",
    date: "dec 2025",
    url: "https://www.linkedin.com/posts/arishshahab_we-won-1st-place-in-healthcare-at-hackprinceton-activity-7393782950242422784-kRpK/",
  },
  {
    title: "mcmaster president steve orsini on the hackprinceton win",
    source: "X / @SteveOrsini",
    date: "2025",
    url: "https://x.com/SteveOrsini/status/2000995669931384966",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const News = () => {
  return (
    <div>
      <motion.ul
        className="space-y-10"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.03 }}
      >
        {newsItems.map((item, i) => (
          <motion.li key={i} variants={fadeUp}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="flex items-baseline justify-between gap-6 mb-2">
                <p className="text-[#2e2e2e] text-[12px]">{item.source}</p>
                <p className="text-[#222222] text-[12px] shrink-0">{item.date}</p>
              </div>
              <p className="text-[#666666] text-[15px] leading-[1.85] group-hover:text-[#c8c2b8] transition-colors duration-300">
                {item.title} ↗
              </p>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SectionWrapper(News, "news");
