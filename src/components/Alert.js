import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ text }) => {
  return (
    <div className="alert alert-secondary" role="alert">
      {text}
    </div>
  );
};
Alert.propTypes = {
  text: PropTypes.string,
};
Alert.defaultProps = {
  text: 'warning',
};
export default Alert;
