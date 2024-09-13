import BlogCard from "./BlogCard"

function BlogList({ blogs }) {
  // expect to list out blog cards

  const blogCards = blogs.map((blog, index) => <BlogCard key={index} title={blog.title} content={blog.content} />)

  return (
    <div>
      <h1>Blogs</h1>
      { blogCards }
    </div>
  )
}

export default BlogList