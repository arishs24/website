import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'; // Ensure this path is correct

const TechBox = ({ index, name }) => (
  <Tilt className="w-full sm:w-[180px] md:w-[200px]">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[2px] rounded-[24px] shadow-card"
    >
      <div
        options={{
          max: 35,
          scale: 1,
          speed: 400,
        }}
        className="bg-tertiary rounded-[24px] py-6 px-8 min-h-[160px] flex justify-center items-center flex-col"
      >
        <h3 className="text-white text-[18px] font-semibold text-center leading-snug">
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default TechBox;
