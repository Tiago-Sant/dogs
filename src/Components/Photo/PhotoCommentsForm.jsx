import React from 'react';
import { ReactComponent as SendIcon } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../Api';
import ErrorMessage from '../Helper/ErrorMessage';
import styles from './PhotoCommentsForm.module.css';
import PropTypes from 'prop-types';

function PhotoCommentsForm({ id, setCommentsUpdated, single }) {
  const [comment, setComment] = React.useState('');
  const { request, error, loading } = useFetch();
  const token = window.localStorage.getItem('token');

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setCommentsUpdated((state) => [...state, json]);
    }
  }

  function handleChange(event) {
    setComment(event.target.value);
  }
  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <label
        className={styles.label}
        htmlFor="comment"
        style={{ position: 'absolute' }}
      >
        {!comment && 'Comente...'}
      </label>
      <textarea
        id="comment"
        name="comment"
        value={comment}
        onChange={handleChange}
        className={styles.textarea}
      />
      {loading && (
        <button className={styles.button} disabled>
          <SendIcon />
        </button>
      )}
      {!loading && (
        <button className={styles.button}>
          <SendIcon />
        </button>
      )}
      <ErrorMessage error={error} />
    </form>
  );
}

PhotoCommentsForm.propTypes = {
  id: PropTypes.number.isRequired,
  setCommentsUpdated: PropTypes.func.isRequired,
  single: PropTypes.bool,
};

export default PhotoCommentsForm;
