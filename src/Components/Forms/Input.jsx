import React from 'react';
import styles from './Input.module.css';

function Input({ type, label, name, value, onChange, onBlur, error }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
