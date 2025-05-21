import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, project, onViewDetails }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <div
              key={`${project.name}-${tag.name}`}
              className="green-pink-gradient p-[1px] rounded-[10px]"
            >
              <div className="bg-[#151030] rounded-[10px] px-3 py-1">
                <p className="text-white text-[12px] font-medium">{tag.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={() => onViewDetails(project)}
            className="text-[14px] text-cyan-400 underline hover:text-cyan-300"
          >
            View Details →
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-tertiary text-white rounded-xl max-w-4xl w-full p-6 relative max-h-[80vh] overflow-y-auto shadow-lg mt-[60px]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
        >
          ✕
        </button>

        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <h3 className="text-white font-bold text-2xl mb-2">{project.name}</h3>
        <p className="text-secondary mb-4">{project.detailedDescription}</p>

        <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <div
              key={`${project.name}-${tag.name}`}
              className="green-pink-gradient p-[1px] rounded-[10px]"
            >
              <div className="bg-[#151030] rounded-[10px] px-3 py-1">
                <p className="text-white text-[12px] font-medium">{tag.name}</p>
              </div>
            </div>
          ))}
        </div>

        {project.features && (
          <>
            <h4 className="text-white font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-secondary text-sm space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

const Works = ({ setShowNavbar }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setShowNavbar(false); // 👈 hide navbar when modal is open
  };

  const handleClose = () => {
    setSelectedProject(null);
    setShowNavbar(true); // 👈 show navbar when modal is closed
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects reflect my experience with modern full-stack development, real-world problem solving, and designing user-focused applications.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
            onViewDetails={handleOpen}
          />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={handleClose} />
    </>
  );
};

export default SectionWrapper(Works, "projects");