import React from 'react';
import styles from './PhotoDelete.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../Api';

function PhotoDelete({ id }) {
  const { request, loading } = useFetch();
  const token = window.localStorage.getItem('token');

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (!confirm) return;

    const { url, options } = PHOTO_DELETE(id, token);
    const { response } = await request(url, options);
    response.ok && window.location.reload();
  };
  return (
    <>
      {loading && <div className={styles.delete}>Deletar</div>}
      {!loading && (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
}

export default PhotoDelete;
