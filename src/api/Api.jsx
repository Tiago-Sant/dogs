import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';
import PhotoPost from './endpoints/PhotoPost';
import PhotoGet from './endpoints/PhotoGet';

function Api() {
  return (
    <div>
      <h1>Api</h1>
      <div>
        <h2>User Post</h2>
        <UserPost />
      </div>
      <div>
        <h2>Token Post</h2>
        <TokenPost />
      </div>
      <div>
        <h2>Photo Post</h2>
        <PhotoPost />
      </div>
      <div>
        <h2>Photo Get</h2>
        <PhotoGet />
      </div>
    </div>
  );
}

export default Api;
