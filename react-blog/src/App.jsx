import { useState } from 'react';
import { generateCreatedAtDate } from './utils/date';
import { nanoid } from 'nanoid';
import PostItem from './components/PostItem';
import CreatePostForm from './components/CreatePostForm';

function App() {
  const [posts, setPosts] = useState([])  

  const handleAddPost = (title, author, text) => {
    const newPost = {
      title,
      author,
      text,    
      createdAt: generateCreatedAtDate(),
      id: nanoid(),
  }

    setPosts((prev) => {      
    return [...prev, newPost]
  })
}

  return (
  <>
    <div className="container">
      <header>
        <div className="logo"></div>
      </header>      
      <div className="wrapper">
        <main>
          <h1>Recent Posts:</h1>
          <div className="posts-container">
           {
            posts.length
            ? (
            posts.map((item) => {
            return <PostItem {...item} key={item.id} />
            })
          ) : (
            <h3>No posts yet</h3>
          )           
            }
          </div>
        </main>
        <aside>
          <h3>Create Your Post:</h3>
          <CreatePostForm handleAddPost={handleAddPost}/>
        </aside>
      </div>
    </div>  
  </>
  )
}

export default App;