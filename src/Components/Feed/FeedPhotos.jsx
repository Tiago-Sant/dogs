import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import ErrorMessage from '../Helper/ErrorMessage';
import Loading from '../Helper/Loading';
import { PHOTOS_GET } from '../../Api';
import styles from './FeedPhotos.module.css';
import ProtoTypes from 'prop-types';

function FeedPhotos({ page, user, setModalPhoto, setInfinity, total = 6 }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response?.ok && json.length < total) {
        setInfinity(false);
      }
    }
    fetchPhotos();
  }, [user, request, total, page, setInfinity]);

  if (error) return <ErrorMessage error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  return null;
}

FeedPhotos.defaultProps = {
  user: 0,
};

FeedPhotos.propTypes = {
  user: ProtoTypes.oneOfType([ProtoTypes.string, ProtoTypes.number]),
  setModalPhoto: ProtoTypes.func.isRequired,
  setInfinity: ProtoTypes.func.isRequired,
  page: ProtoTypes.number,
  total: ProtoTypes.number,
};

export default FeedPhotos;
