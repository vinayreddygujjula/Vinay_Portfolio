import React from "react";
import { motion } from "framer-motion";
import { categorizedTechnologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import TechCard from "./TechCard";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      {/* Wrap categories with flex and allow side-by-side display for small ones */}
      <div className='mt-10 flex flex-wrap justify-between gap-10'>
        {categorizedTechnologies.map((category, catIndex) => (
          <div
            key={category.category}
            className={`${
              category.items.length <= 3
                ? "w-full md:w-[48%]" // place 2 categories side-by-side if small
                : "w-full"
            }`}
          >
            <h3 className='text-white text-[24px] font-bold mb-6'>
              {category.category}
            </h3>
            <div className='flex flex-wrap gap-6'>
              {category.items.map((tech, index) => (
                <TechCard key={tech.name} index={index} {...tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");