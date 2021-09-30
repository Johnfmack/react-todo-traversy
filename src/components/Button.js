import React from "react";
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {


  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.propTypes = {
    text: PropTypes.string,
    clor: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    color:'steelblue'
}

export default Button;
