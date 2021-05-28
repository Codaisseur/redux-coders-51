import { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onPostSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content });
  }

  return (
  <div>
    <h2>Post: only logged in users!</h2>
    <form onSubmit={onPostSubmit}>
      <div>
        <label style={{ marginRight: 20 }}>Title</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/> 
      </div>
      <div>
        <label style={{ marginRight: 20 }}>Content</label>
        <textarea value={content} onChange={e => setContent(e.target.value)}/> 
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}
 
export default CreatePost;