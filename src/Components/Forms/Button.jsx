import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ children, ...props }) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
