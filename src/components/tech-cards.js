import React from "react";
import PropTypes from "prop-types";

function TechCards({ stack }) {
  console.log("stack", stack);
  return (
    <div>
      <div className="flex">
        <h2>Technologies Used:</h2>
        {stack.map((tech, i) => {
          return (
            <div key={i} className="bg-gray-300 px-4 py-2 mr-3 my-2">
              <h1 className="text-DARK">{tech}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

TechCards.defaultProps = {
  stack: []
};

TechCards.propTypes = {
  stack: PropTypes.array.isRequired
};

export default TechCards;
