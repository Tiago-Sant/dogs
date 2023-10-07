import React from 'react';

function useMedia(media) {
  const [match, setMatch] = React.useState(false);
  React.useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  });

  return match;
}

export default useMedia;
