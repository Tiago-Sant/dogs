import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';
import PropTypes from 'prop-types';

function PhotoComments({ id, comments, single }) {
  const [commentsUpdated, setCommentsUpdated] = React.useState(() => comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [commentsUpdated]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ''}`}
      >
        {commentsUpdated.map(
          ({ comment_ID, comment_author, comment_content }) => (
            <li key={comment_ID}>
              <b>{comment_author}: </b>
              <span>{comment_content}</span>
            </li>
          ),
        )}
      </ul>
      {login && (
        <PhotoCommentsForm
          id={id}
          setCommentsUpdated={setCommentsUpdated}
          single={single}
        />
      )}
    </>
  );
}

PhotoComments.propTypes = {
  id: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  single: PropTypes.bool,
};

export default PhotoComments;
