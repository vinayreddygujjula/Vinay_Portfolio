import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const TechCard = ({ index, name, icon }) => (
  <Tilt className='xs:w-[160px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-4 px-4 min-h-[180px] flex justify-center items-center flex-col'>
        <img src={icon} alt={name} className='w-20 h-24 object-contain mb-3' />
        <h3 className='text-white text-[14px] font-medium text-center'>{name}</h3>
      </div>
    </motion.div>
  </Tilt>
);

export default TechCard;