import React from "react";
import PropTypes from "prop-types";

function Card({ title, description, className }) {
  return (
    <div className={`${className} bg-DARK px-10 shadow-xl`}>
      <div className="flex items-center">
        <div className="my-8">
          <h1 className="mb-6 text-2xl text-white thick-underline-TEAL uppercase font-bold">
            {title}
          </h1>
          <p className="text-white text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
