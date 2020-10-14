import React from "react";
// import PropTypes from "prop-types";

function Technologies() {
  return (
    <div className="flex">
      <div>
        <h1>Frontend</h1>
        <ul>React (Next.js, Gatsby.js)</ul>
        <ul>Redux</ul>
        <ul>React Native</ul>
        <ul>Handlebars</ul>
        <ul>jQuery</ul>
        <ul>SCSS</ul>
        <ul>Tailwind CSS</ul>
      </div>

      <p></p>
      <p></p>
      <p>Main: Javascript, HTML, CSS</p>
      <p>Frontend:</p>
      <p>Backend: Node, Express, MongoDB, Firebase, Passport</p>
      <p>Deployment: AWS, Heroku, Netlify, Vercel, Git</p>
      <p>Design: Figma, Procreate</p>
    </div>
  );
}

Technologies.defaultProps = {};

Technologies.propTypes = {};

export default Technologies;
