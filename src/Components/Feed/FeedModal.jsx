import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../Api';
import ErrorMessage from '../Helper/ErrorMessage';
import PhotoContent from '../Photo/PhotoContent';
import Loading from '../Helper/Loading';
import PropTypes from 'prop-types';

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET(photo.id);
      await request(url, options);

      Element.current.focus();
    }
    fetchPhotos();
  }, [photo, request]);

  const handleOutsideClick = ({ target, currentTarget }) => {
    target === currentTarget && setModalPhoto(null);
  };

  const handleKeyDown = ({ key }) => {
    key === 'Escape' && setModalPhoto(null);
  };

  const Element = React.useRef();

  return (
    <>
      <ErrorMessage error={error} />
      {!error && (
        <div
          className={styles.modal}
          onClick={handleOutsideClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
          ref={Element}
        >
          {loading && <Loading />}
          {data && <PhotoContent data={data} />}
        </div>
      )}
    </>
  );
}

FeedModal.propTypes = {
  photo: PropTypes.object.isRequired,
  setModalPhoto: PropTypes.func.isRequired,
};

export default FeedModal;
