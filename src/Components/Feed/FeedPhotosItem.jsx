import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';
import PropTypes from 'prop-types';

function FeedPhotosItem({ photo, setModalPhoto }) {
  const handleModal = (event) => {
    if (event.key && event.key !== 'Enter') return;
    setModalPhoto(photo);
  };
  return (
    <li
      className={styles.photo}
      tabIndex="0"
      onClick={handleModal}
      onKeyDown={handleModal}
    >
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
}

FeedPhotosItem.propTypes = {
  photo: PropTypes.object.isRequired,
  setModalPhoto: PropTypes.func.isRequired,
};

export default FeedPhotosItem;
