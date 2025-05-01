import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import styles from '../styles'; // Ensure this path is correct
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper'; // Ensure this path is correct
import profilePic from '../assets/head.jpg'; // Update with the correct path to your image

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  console.log('About component rendered');
  return (
    <div className='flex flex-wrap'>
      <div className='w-full md:w-2/3 flex flex-col justify-center'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
  variants={fadeIn('', '', 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
  👋 Hello! I’m Arish Shahab, a Biomedical Engineering and Health Sciences student at McMaster University, passionate about fusing technology and healthcare to drive meaningful innovation.<br /><br />

  📚 I’ve built hands-on experience through research at Harvard Medical School’s Foot & Ankle Research and Innovation Lab, where I contribute to computational orthopedic modeling, as well as at Johns Hopkins University and Emory University, where I’ve worked on brain-computer interface systems and machine learning for neuroscience. My background spans computational modeling, medical AI, and biomedical device design.<br /><br />

  🌱 Alongside research, I lead impactful projects like SupraScan, an AI-powered early detection tool for Progressive Supranuclear Palsy using PET and MRI scans, and Iremia, a stress-tracking wearable offering real-time personalized feedback. These reflect my drive to solve real-world healthcare challenges through innovative engineering and design.<br /><br />

  🚀 Outside the lab, I mentor students with research, write for McMaster’s engineering journal <i>The Frequency</i>, and collaborate on projects that advance healthcare technology and innovation.<br /><br />

  ⚽ Hobbies: Reading, Traveling, Basketball, Working Out, Cooking, Exploring Cutting-Edge Research<br /><br />
  
  💬 Let’s Connect: Biomedical Engineering, Drug Delivery Systems, AI in Healthcare, Medical Research, Neurotechnology, Rehabilitation Innovation
</motion.p>

      </div>

      <div className='w-full md:w-1/3 flex justify-center items-center mt-10 md:mt-0'>
        <div className='relative'>
          <img
            src={profilePic}
            alt="Profile"
            className='w-64 h-64 rounded-full border-4 border-white shadow-lg object-cover'
            style={{ marginTop: '10%' }} // Adjust this value to position the image in the middle
          />
        </div>
      </div>

      <div className='w-full mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
