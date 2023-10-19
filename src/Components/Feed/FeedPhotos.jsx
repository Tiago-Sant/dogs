import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import ErrorMessage from '../Helper/ErrorMessage';
import Loading from '../Helper/Loading';
import { PHOTOS_GET } from '../../Api';
import styles from './FeedPhotos.module.css';

function FeedPhotos() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  console.log('data', data);
  if (error) return <ErrorMessage error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  return null;
}

export default FeedPhotos;
