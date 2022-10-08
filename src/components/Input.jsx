import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Input;
