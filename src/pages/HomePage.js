import { useState, useEffect } from 'react';
import axios from 'axios';

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://codaisseur-coders-network.herokuapp.com/posts');
        console.log(response.data.rows);
        setPosts(response.data.rows);
      } catch(e) {
        console.log(e.message);
      }
    }
    fetchPosts();
  }, [])
  // Fetch some data and display
  // 1. Axios to make a request
  // 2. useEffect to trigger the call
  // 3. useState to keep the data.

  return (
  <div>
    <h1>Codaisseur Redux Posts</h1>
    <div>
      {posts.map(p => (
        <div style={{ border: '1px solid black', margin: 10 }}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
 
export default Homepage;