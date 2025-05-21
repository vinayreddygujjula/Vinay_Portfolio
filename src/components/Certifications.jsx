import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import csharp from "../assets/certs/csharp.png";
import aws from "../assets/certs/aws.png";
import java from "../assets/certs/java.png";
import web from "../assets/certs/web.png";
import mysql from "../assets/certs/sql.png";
import postman from "../assets/certs/postman.png";

const certifications = [
  {
    name: "Foundational C# with Microsoft",
    image: csharp
  },
  {
    name: "OOP in Java",
    image: java,
  },
  {
    name: "Responsive Web Design",
    image: web,
  },
  {
    name: "SQL using MySQL",
    image: mysql,
  },
];

const CertificationCard = ({ index, cert }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
    <Tilt
      options={{
        max: 25,
        scale: 1,
        speed: 400,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card"
    >
      <div className="w-full h-[200px] flex items-center justify-center">
        <img
          src={cert.image}
          alt={cert.name}
          className="object-contain max-h-full max-w-full rounded-lg"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-white text-[20px] font-bold text-center">
          {cert.name}
        </h3>
      </div>

      {cert.url && (
        <div className="mt-4 flex justify-center">
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-cyan-400 underline hover:text-cyan-300"
          >
            View Credential →
          </a>
        </div>
      )}
    </Tilt>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Credentials</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certifications.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} cert={cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");