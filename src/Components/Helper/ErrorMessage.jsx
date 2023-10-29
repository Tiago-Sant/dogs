import React from 'react';

function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <p style={{ color: '#f31', margin: '1rem 0', fontSize: '.8rem' }}>
      {error}
    </p>
  );
}

export default ErrorMessage;
