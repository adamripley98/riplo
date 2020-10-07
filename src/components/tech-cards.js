import React from "react";
import PropTypes from "prop-types";

function TechCards({ stack, isDark }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Technologies Used:</h2>
      <div className="flex flex-wrap">
        {stack.map((tech, i) => {
          return (
            <div
              key={i}
              className={`px-4 py-2 mr-3 my-1 ${
                isDark ? "bg-TEAL" : "bg-DARK-TEAL"
              }`}
            >
              <p className="text-DARK text-bold">{tech}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

TechCards.defaultProps = {
  stack: [],
  isDark: false
};

TechCards.propTypes = {
  stack: PropTypes.array.isRequired,
  isDark: PropTypes.bool.isRequired
};

export default TechCards;
