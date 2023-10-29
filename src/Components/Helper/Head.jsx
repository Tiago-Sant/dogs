import React from 'react';
import PropTypes from 'prop-types';

function Head({ title, description }) {
  React.useEffect(() => {
    document.title = `${title} | Dogs`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', description || '');
  }, [title, description]);
  return <></>;
}

Head.defaultProps = {
  description: 'Página do site Dogs, um site de cachorros',
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Head;
