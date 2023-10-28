import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';

function UserProfile() {
  const { user } = useParams();
  return (
    <section className="container mainContainer">
      <Head
        title={user}
        description="Página de usuário do site Dogs, com feed de fotos."
      />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
}

export default UserProfile;
