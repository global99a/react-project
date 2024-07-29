import React, { useState } from 'react';
import PatientHeader from './PatientHeader';

const PatientCommunityinteraction = () => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = () => {
    setPosts([...posts, { title: '', content: '' }]);
  };

  return (
    <><PatientHeader/>
    <div>
      <h2>Community Interaction</h2>
      <button onClick={handleAddPost}>Create Post</button>
      {posts.map((post, index) => (
        <div key={index}>
          <input
            type="text"
            value={post.title}
            onChange={(e) => {
              const newPosts = [...posts];
              newPosts[index].title = e.target.value;
              setPosts(newPosts);
            }}
            placeholder="Post Title"
          />
          <textarea
            value={post.content}
            onChange={(e) => {
              const newPosts = [...posts];
              newPosts[index].content = e.target.value;
              setPosts(newPosts);
            }}
            placeholder="Post Content"
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default PatientCommunityinteraction
