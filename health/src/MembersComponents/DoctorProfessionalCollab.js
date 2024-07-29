import React, { useState, useEffect } from 'react';
import DoctorHeader from './DoctorHeader';

function DoctorProfessionalCollab() {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');

  // Fetch posts from the server
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const createPost = async () => {
    try {
      await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: newPostContent })
      });
      setNewPostContent('');
      // After creating the post, fetch updated posts
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <>
    <DoctorHeader/>
    <div>
      <h1>Health Forum</h1>
      {/* New post form */}
      <div>
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Write your post..."
        ></textarea>
        <button onClick={createPost}>Post</button>
      </div>
      {/* Display existing posts */}
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <p>{post.content}</p>
            {/* Additional UI elements for post interactions (e.g., like, comment) */}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default DoctorProfessionalCollab;
