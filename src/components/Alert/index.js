import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ msg, type }) => {
  return <p className={`pick-pot-form__alert pick-pot-form__alert--${type}`}>{msg}</p>;
};
Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
export default Alert;
