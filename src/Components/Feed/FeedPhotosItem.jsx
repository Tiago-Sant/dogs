import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';

function FeedPhotosItem({ photo, setModalPhoto }) {
  return (
    <li className={styles.photo} onClick={() => setModalPhoto(photo)}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
