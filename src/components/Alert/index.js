import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ msg, type }) => {
  if (!msg) {
    return null;
  }
  return <p className={`pick-pot-form__alert pick-pot-form__alert--${type || 'success'}`}>{msg}</p>;
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
Alert.defaultProps = {
  type: 'success'
};
export default Alert;
