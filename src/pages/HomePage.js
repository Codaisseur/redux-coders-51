import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getLoading } from '../store/posts/selectors';
import { fetchPosts } from '../store/posts/actions';

const Homepage = () => {
  const dispatch = useDispatch();

  const posts = useSelector(getPosts);
  const loading = useSelector(getLoading)

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  return (
  <div>
    <h1>Codaisseur Redux Posts</h1>
    <div>
      {loading ? "Loading...." : posts.map(p => (
        <div style={{ border: '1px solid black', margin: 10 }} key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
 
export default Homepage;