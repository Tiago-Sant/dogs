import React from 'react';
import styles from './Image.module.css';

function Image({ src, alt, ...props }) {
  const [isLoading, setIsLoading] = React.useState(true);

  function handleLoad({ target }) {
    setIsLoading(false);
    target.style.opacity = 1;
  }
  return (
    <div className={styles.wrapper}>
      {isLoading && <div className={styles.skeleton}></div>}
      <img
        onLoad={handleLoad}
        className={styles.img}
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
}

export default Image;
