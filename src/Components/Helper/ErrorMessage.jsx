import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <p style={{ color: '#f31', margin: '1rem 0', fontSize: '.8rem' }}>
      {error}
    </p>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
