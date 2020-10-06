import React from "react";
import PropTypes from "prop-types";

function Button({ value }) {
  return (
    <input
      type="button"
      name="button"
      value={value}
      className="bg-transparent px-5 py-3 border-TEAL text-white uppercase text-lg montserrat"
    />
  );
}

Button.defaultProps = {
  value: "Submit",
  type: ""
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
