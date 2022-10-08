import React from 'react';
import PropTypes from 'prop-types';

function Button({
  text,
}) {
  return (
    <div>
      <button type="submit">{text}</button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
