import React from "react";
import PropTypes from "prop-types";
import TechCards from "./tech-cards";

function Project({ project, isDark }) {
  return (
    <div
      className={`${
        isDark ? "bg-DARK" : "bg-GRAY"
      } pt-10 px-10 my-10 shadow-xl`}
    >
      <div className="flex items-center">
        <div className="w-1/2 pb-10">
          <h1
            className={`inline-block mb-6 text-6xl ${
              isDark
                ? `text-white thick-underline-TEAL`
                : `text-DARK thick-underline-DARK-TEAL`
            } uppercase font-bold`}
          >
            {project.title}
          </h1>
          <div className="pr-10 text-left">
            <p
              className={`${isDark ? "text-white" : "text-DARK"} text-2xl mb-6`}
            >
              {project.description}
            </p>
            <TechCards isDark={isDark} stack={project.techStack} />
          </div>
        </div>
        <img className="w-1/2" src={project.image} alt={project.title} />
      </div>
    </div>
  );
}

Project.defaultProps = {
  isDark: false,
  project: {}
};

Project.propTypes = {
  isDark: PropTypes.bool.isRequired,
  project: PropTypes.object.isRequired
};

export default Project;
