import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { experiences, volunteerExperiences, publishedResearch } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';

const tabs = {
  work: {
    label: 'work',
    accent: '#C084FC',
    description: 'labs, fellowships, and teams where I ship healthtech + research software.',
    data: experiences,
  },
  volunteer: {
    label: 'community',
    accent: '#34D399',
    description: 'mentorship, clinics, and initiatives I help run to keep building with others.',
    data: volunteerExperiences,
  },
  research: {
    label: 'research',
    accent: '#60A5FA',
    description: 'peer-reviewed work, manuscripts, and collaborations across institutions.',
    data: publishedResearch,
  },
};

const ExperienceCard = ({ item, index, accent }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.15, 0.8)}
    className="bg-[#0f1222]/80 border border-white/5 rounded-2xl p-6 flex flex-col gap-5 shadow-lg shadow-black/40 backdrop-blur"
  >
    <div className="flex items-start gap-5">
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden ring-2 ring-white/10 shrink-0">
        <img
          src={item.icon}
          alt={item.company_name || item.journal}
          className="w-11 h-11 object-contain"
        />
      </div>

      <div className="flex-1">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">{item.date}</p>
        <h3 className="text-white text-2xl font-semibold mt-2">{item.title}</h3>
        <p className="text-white/70 text-base">{item.company_name || item.journal}</p>
      </div>
    </div>

    <ul className="space-y-2">
      {item.points.map((point, idx) => (
        <li key={`${item.title}-${idx}`} className="flex gap-3 text-white/80 leading-relaxed">
          <span style={{ color: accent }}>▹</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>

    {item.link && (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-white/80 underline hover:text-white transition-colors"
      >
        read the paper ↗
      </a>
    )}
  </motion.div>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  const current = tabs[activeTab];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>field notes + lab logs</p>
        <h2 className={styles.sectionHeadText}>{current.label}.</h2>
        <p className="mt-4 text-white/70 max-w-3xl">{current.description}</p>
      </motion.div>

      <div className="flex flex-wrap gap-3 mt-10">
        {Object.entries(tabs).map(([key, tab]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2 rounded-full text-sm uppercase tracking-[0.2em] transition-all ${
              activeTab === key
                ? 'bg-white text-black shadow-xl shadow-black/50'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6">
        {current.data && current.data.length > 0 ? (
          current.data.map((item, index) => (
            <ExperienceCard
              key={`${current.label}-${item.title}-${index}`}
              item={item}
              index={index}
              accent={current.accent}
            />
          ))
        ) : (
          <p className="text-white/60">coming soon.</p>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
