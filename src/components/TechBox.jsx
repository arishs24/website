import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'; // Ensure this path is correct

const TechBox = ({ index, name}) => (
  <Tilt className='xs:w-[150px] w-full'>
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
        className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col`}
      >
        <h3 className='text-white text-[16px] font-bold text-center'>{name}</h3>
      </div>
    </motion.div>
  </Tilt>
);

export default TechBox;
