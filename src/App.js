import { useState } from 'react';
import './App.css';
import Formulario from './Form';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([]);

  const newPost = (title, content) => {
    const createPost = { title, content };
    let oldPosts = [...posts];
    oldPosts.push(createPost);
    setPosts(oldPosts);
    
  }
  const deletePost = (index) => {
    let oldPosts = [...posts];
    oldPosts.splice(index, 1);
    setPosts(oldPosts);
  }
  return(
    <section>
      <div className="App">
        <h1>BLOG</h1>
        <Formulario onSubmit={newPost}/>
      </div>
      <div id="posts">
        {posts.map((post, index) => (
          <Post key={index} title={post.title} content={post.content} />
        ) )}
      </div>
    </section>
  )
  }
  

export default App;