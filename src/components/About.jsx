import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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
        <img
          src={icon}
          alt='service-icon'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'>
        <p className="mb-6">
          I’m a full stack developer with 5 years of experience building scalable enterprise applications across healthcare, education, and insurance domains. I specialize in Microsoft .NET technologies including ASP.NET Core, Web API, Entity Framework, and C#.
        </p>

        <p className="mb-6">
          On the frontend, I’ve developed dynamic, responsive UIs using React.js, Angular, and Vue.js. I’ve also worked with Redux for state management and integrated secure authentication mechanisms using JWT and OAuth2.
        </p>

        <p className="mb-6">
          I’ve designed and consumed RESTful APIs and built microservices using .NET Core. My experience includes deploying cloud-native solutions on Microsoft Azure and AWS, and setting up CI/CD pipelines with Azure DevOps, Jenkins, Docker and Kubernetes.
        </p>

        <p className="mb-6">
          I’m proficient in working with relational and NoSQL databases like SQL Server, MySQL, MongoDB, and Oracle PL/SQL. I have also optimized backend services using LINQ, ADO.NET, and advanced SQL.
        </p>

        <p>
          I follow Agile methodologies, write unit and integration tests with tools like NUnit and Moq, and ensure code quality through TDD, SonarQube, and performance testing using Postman and JMeter.
        </p>
      </motion.div>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");