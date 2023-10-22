import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinity, setInfinity] = React.useState(true);

  React.useEffect(() => {
    let waiting = false;
    const infinityScroll = () => {
      if (!infinity) return;

      const scrool = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;

      if (scrool > height * 0.75 && !waiting) {
        setPages((pages) => [...pages, pages.length + 1]);
        waiting = true;

        setTimeout(() => {
          waiting = false;
        }, 500);
      }
    };
    window.addEventListener('scroll', infinityScroll);
    window.addEventListener('wheel', infinityScroll);
    return () => {
      window.removeEventListener('scroll', infinityScroll);
      window.removeEventListener('wheel', infinityScroll);
    };
  }, [pages, infinity]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          page={page}
          user={user}
          setModalPhoto={setModalPhoto}
          total={3}
          setInfinity={setInfinity}
        />
      ))}
    </div>
  );
}

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.number.isRequired,
};

export default Feed;
