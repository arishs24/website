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
          👋 Hello World! I’m Arish Shahab – a Biomedical Engineering and Health Sciences student at McMaster University with a passion for combining technology and healthcare to create meaningful solutions.<br /><br />
          
          📚 I’ve gained valuable experience working at institutions like Johns Hopkins University, where I optimized machine learning models for neuroscience research, and Hamilton Health Sciences, where I contributed to advancements in orthopedic applications. These experiences have equipped me with skills in computational modeling, machine learning, and biomedical device design.<br /><br />
          
          🌱 In addition to research, I’ve developed impactful projects like Aqua Boost, a wearable hydration monitor that utilizes bioimpedance sensors to prevent dehydration complications, and Iremia, a stress-tracking wearable device with real-time personalized support. These projects reflect my dedication to addressing real-world healthcare challenges through innovative design and technology.<br /><br />
          
          🚀 Beyond academics, I enjoy mentoring others, writing for McMaster’s engineering journal The Frequency, and collaborating on ideas that push the boundaries of healthcare innovation.

<br /><br />
          
          ⚽ Hobbies: Reading, Traveling, Playing Basketball, Working Out, Cooking, Exploring Research<br /><br />
          💬 Let's Chat About: Biomedical Engineering, Drug Delivery Systems, AI in Healthcare, Medical Research, Lung Disease Treatment
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
