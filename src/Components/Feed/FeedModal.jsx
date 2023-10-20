import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../Api';
import ErrorMessage from '../Helper/ErrorMessage';
import PhotoContent from '../Photo/PhotoContent';
import Loading from '../Helper/Loading';

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET(photo.id);
      request(url, options);
    }
    fetchPhotos();
  }, [photo, request]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  };
  return (
    <>
      <ErrorMessage error={error} />
      {!error && (
        <div className={styles.modal} onClick={handleOutsideClick}>
          {loading && <Loading />}
          {data && !Array.isArray(data) && <PhotoContent data={data} />}
        </div>
      )}
    </>
  );
}

export default FeedModal;
