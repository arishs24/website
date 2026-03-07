import React from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const About = () => {
  return (
    <motion.div
      variants={fadeIn('', '', 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-4xl mx-auto leading-[30px]'
    >
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <div className='mt-8 space-y-8'>
        {/* Basic Intro */}
        <div className='space-y-3'>
          <p className='text-white text-[18px] leading-relaxed'>
            i'm an <span className='text-[#FDE047] font-semibold'>19-year-old</span> from <span className='text-[#93C5FD] font-semibold'>oakville, ontario</span>, and i like to build things that actually help people.
          </p>
          <p className='text-white text-[18px] leading-relaxed'>
            i'm a <span className='text-[#C084FC] font-semibold'>biomedical engineering + health sciences</span> student at <span className='text-[#A78BFA] font-semibold'>mcmaster university</span>, aiming for med school while building in <span className='text-[#34D399] font-semibold'>health tech</span>.
          </p>
        </div>

        {/* Current Status */}
        {/* What I'm up to lately */}
        <div>
          <h3 className='text-white text-[20px] font-semibold mb-3'>what i'm up to lately:</h3>
          <ul className='list-disc list-inside space-y-3 text-white text-[17px] ml-4'>
            <li>
              building <span className='text-[#A78BFA] font-semibold'>suprascan</span> — an AI tool for early detection of neurodegenerative diseases using PET + MRI data, focused on better modelling + 3D visualization for higher accuracy.
            </li>
            <li>
              developing <span className='text-[#34D399] font-semibold'>neurite</span>, a broader platform for AI-driven brain health analysis that combines imaging, biomarkers, and clinical context.
            </li>
            <li>
              conducting research across <span className='text-[#F472B6] font-semibold'>harvard medical school</span>, <span className='text-[#FBBF24] font-semibold'>johns hopkins</span>, <span className='text-[#FCA5A5] font-semibold'>hamilton health sciences</span>, <span className='text-[#A5B4FC] font-semibold'>uhn</span>, and the <span className='text-[#67E8F9] font-semibold'>rbc borealis lsi program</span> on rehab ML, neuroimaging, biomechanics, and clinical AI.
            </li>
            <li>
              building <span className='text-[#60A5FA] font-semibold'>flexaid</span>, a sensor-based rehab device that uses ML for real-time form correction.
            </li>
            <li>
              shipping <span className='text-[#FDE68A] font-semibold'>khushu</span>, an app with lock-in mode + rewards to help people focus on quran recitation.
            </li>
            <li>
              creating <span className='text-[#F9A8D4] font-semibold'>islamic content</span> on TikTok, making faith more accessible for younger audiences.
            </li>
          </ul>
        </div>

        {/* Some cool things I've done in the past */}
        <div>
          <h3 className='text-white text-[20px] font-semibold mb-3'>some cool things i've done in the past:</h3>
          <ul className='list-disc list-inside space-y-3 text-white text-[17px] ml-4'>
            <li>
              won <span className='text-[#93C5FD] font-semibold'>HackPrinceton</span> by building an automated segmentation + surgical planning tool for orthopaedics.
            </li>
            <li>
              picked up multiple hackathon wins across <span className='text-[#F472B6] font-semibold'>bioengineering</span> + <span className='text-[#34D399] font-semibold'>healthcare innovation</span>.
            </li>
            <li>
              received the <span className='text-[#FDE047] font-semibold'>Nebius AI Discovery Award</span> and named a <span className='text-[#FBBF24] font-semibold'>JXTX Scholar</span> for imaging + ML work.
            </li>
            <li>
              worked at <span className='text-[#C084FC] font-semibold'>Harvard Medical School’s Foot & Ankle Lab</span> building CT-to-FEA automation tools as a software engineering intern.
            </li>
            <li>
              collaborated with the <span className='text-[#A5B4FC] font-semibold'>Crone Lab at Johns Hopkins</span> on brain-computer interface synchronization systems.
            </li>
            <li>
              published/contributed to research on <span className='text-[#FCA5A5] font-semibold'>interstitial lung disease</span>, <span className='text-[#FDBA74] font-semibold'>orthopaedics</span>, and <span className='text-[#A7F3D0] font-semibold'>biomechanics</span>.
            </li>
            <li>
              founded <span className='text-[#67E8F9] font-semibold'>Evolv Labs</span>, creating mechanical + computational solutions for hearing loss.
            </li>
            <li>
              built <span className='text-[#FCD34D] font-semibold'>Aqua Boost</span>, a wearable hydration tracker inspired by my experience with rhabdomyolysis.
            </li>
            <li>
              shipped several full-stack and hardware-software hybrid projects (because why not mix microcontrollers + React?).
            </li>
          </ul>
        </div>

        {/* How I started */}
        <div>
          <h3 className='text-white text-[20px] font-semibold mb-3'>how i started:</h3>
          <div className='space-y-3 text-white text-[17px]'>
            <p>
              i've always been a builder—grew up loving <span className='text-[#93C5FD] font-semibold'>science, art, and tech</span>, and turned curiosity into a habit of making things.
            </p>
            <p>
              my family's medical history (stroke + alzheimer’s) pushed me toward <span className='text-[#C084FC] font-semibold'>neurodegeneration</span> and clinical innovation.
            </p>
            <p>
              in high school i dove headfirst into research, competitions, robotics coaching, teaching, and shipping projects to see how far i could push myself.
            </p>
            <p>
              learned early that <span className='text-[#34D399] font-semibold'>execution beats perfection</span>, and momentum compounds in everything you do.
            </p>
          </div>
        </div>

        {/* Where do I see myself in 10 years */}
        <div>
          <h3 className='text-white text-[20px] font-semibold mb-3'>where do i see myself in 10 years:</h3>
          <p className='text-white text-[17px] leading-relaxed'>
            probably still building in <span className='text-[#93C5FD] font-semibold'>medical ai</span>, <span className='text-[#F472B6] font-semibold'>neurotechnology</span>, or <span className='text-[#A78BFA] font-semibold'>biomedical devices</span>. my north star: create products that drive <span className='text-[#34D399] font-semibold'>real patient impact</span>, maybe dabble in <span className='text-[#FCD34D] font-semibold'>venture</span> to back other builders, and keep fostering communities where ambitious people can collide.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, 'about');
