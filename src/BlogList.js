const BlogList = ({blogs, title, handleDelete}) => {


    return ( <div className="blog-list">
            <h1>{title}</h1>
    {blogs.map((blog) => { return(
        <div className="blog-preview" key={blog.id}>
            <h2>Title: {blog.title}</h2>
            <p>Author: {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>)
    })}
</div> );
}
 
export default BlogList;