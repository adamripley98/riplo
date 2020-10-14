import React from "react";
// import PropTypes from "prop-types";

function Technologies() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="inline-block text-4xl thickest-underline-TEAL">
          Technologies
        </h1>
      </div>

      <div className="flex justify-around">
        <div className="w-1/3">
          <h1 className="inline-block text-xl thick-underline-TEAL">
            Frontend
          </h1>
          <ul className="text-lg montserrat my-1">
            React (Next.js, Gatsby.js)
          </ul>
          <ul className="text-lg montserrat my-1">Redux</ul>
          <ul className="text-lg montserrat my-1">React Native</ul>
          <ul className="text-lg montserrat my-1">Handlebars</ul>
          <ul className="text-lg montserrat my-1">jQuery</ul>
          <ul className="text-lg montserrat my-1">SCSS</ul>
          <ul className="text-lg montserrat my-1">Tailwind CSS</ul>
        </div>
        <div className="w-1/3">
          <h1 className="inline-block text-xl thick-underline-TEAL">Backend</h1>
          <ul className="text-lg montserrat my-1">Node</ul>
          <ul className="text-lg montserrat my-1">Express</ul>
          <ul className="text-lg montserrat my-1">MongoDB</ul>
          <ul className="text-lg montserrat my-1">Firebase</ul>
          <ul className="text-lg montserrat my-1">Passport</ul>
        </div>
        <div className="w-1/3">
          <h1 className="inline-block text-xl thick-underline-TEAL">
            Other tools
          </h1>
          <ul className="text-lg montserrat my-1">AWS</ul>
          <ul className="text-lg montserrat my-1">Heroku</ul>
          <ul className="text-lg montserrat my-1">Netlify</ul>
          <ul className="text-lg montserrat my-1">Vercel</ul>
          <ul className="text-lg montserrat my-1">Git</ul>
          <ul className="text-lg montserrat my-1">Figma</ul>
          <ul className="text-lg montserrat my-1">Procreate</ul>
        </div>
      </div>
    </div>
  );
}

Technologies.defaultProps = {};

Technologies.propTypes = {};

export default Technologies;
