import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idButtonClick, setIdButtonClick] = useState(1);

  // note : this can be done by using input and passing id or by button click passing idButtonClick
  const handleClick = () => {
    setIdButtonClick(id);
  };

  useEffect(() => {
    // fetching data with useEffect
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButtonClick}`) // gets single post
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
        </ul>*/}
    </div>
  );
}
