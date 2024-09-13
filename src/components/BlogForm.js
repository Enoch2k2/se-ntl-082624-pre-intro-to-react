import { useState } from "react"

const styles = {
  contentLabel: {
    display: "block"
  }
}

function BlogForm({ addBlog }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const blog = {
      title: title,
      content: content
    }

    addBlog(blog)
    setTitle("")
    setContent("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="content" style={styles.contentLabel}>Content: </label>
        <textarea name="content" id="content" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      <input type="submit" value="Create Blog" />
    </form>
  )
}

export default BlogForm