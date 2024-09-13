import { useState } from 'react'
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import Header from './components/Header'

function App() {
  const [blogs, setBlogs] = useState([
    {
      title: "Blog Title 1",
      content: "This is a blog about dogs."
    },
    {
      title: "Blog Title 2",
      content: "A blog about cats."
    },
    {
      title: "Blog Title 3",
      content: "This is a blog about komodo dragons."
    }
  ])

  function addBlog(blog) {
    setBlogs([...blogs, blog])
  }
  
  return (
    <div className="App">
      <Header />
      <BlogForm addBlog={addBlog} />
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
