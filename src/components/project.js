import React from "react";
import PropTypes from "prop-types";
import TechCards from "./tech-cards";
import GetACollegeMentorImg from "../images/college-mentor.png";

const techStack = [
  "React",
  "Gatsby",
  "Tailwind CSS",
  "Airtable",
  "Sendgrid",
  "AWS S3"
];

function Project({ isDark }) {
  return (
    <div className={`${isDark ? "bg-DARK" : "bg-white"}`}>
      <h1
        className={` inline-block mb-6 text-6xl ${
          isDark ? `text-white` : `text-DARK`
        } uppercase font-bold thick-underline`}
      >
        Get A College Mentor
      </h1>
      <p
        className={`${
          isDark ? "text-white" : "text-DARK"
        } text-xl font-bold mb-6`}
      >
        Web app for a non-profit founded by a few South African students
        attending the University of Pennsylvania. The app connects South African
        high schoolers with mentors who attend top universities in the United
        States. Riplo designed and built the website utilizing Airtable&apos;s
        API on the backend to allow the non-profit&apos;s non-technical founders
        to make edits to the site.
      </p>
      <div className="w-full">
        <img src={GetACollegeMentorImg} alt="macbook mockup" />
      </div>
      <TechCards stack={techStack} />
    </div>
  );
}

Project.defaultProps = {
  isDark: false
};

Project.propTypes = {
  isDark: PropTypes.bool.isRequired
};

export default Project;
