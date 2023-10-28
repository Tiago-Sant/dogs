import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../Api';
import ErrorMessage from '../Helper/ErrorMessage';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Helper/Head';

function Photo() {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTO_GET(id);
      request(url, options);
    }
    fetchPhoto();
  }, [request, id]);

  if (error) return <ErrorMessage error={error} />;
  if (loading) return <Loading />;
  if (data && !Array.isArray(data))
    return (
      <section className="container mainContainer">
        <Head
          title={data.photo.title}
          description={`Página da foto ${data.photo.title} do site Dogs.`}
        />
        <PhotoContent data={data} single={true} />
      </section>
    );
}

export default Photo;
