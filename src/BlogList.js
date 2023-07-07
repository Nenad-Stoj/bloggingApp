const BlogList = ({blogs, title}) => {


    return ( <div className="blog-list">
            <h1>{title}</h1>
    {blogs.map((blog) => { return(
        <div className="blog-preview" key={blog.id}>
            <h2>Title: {blog.title}</h2>
            <p>Author: {blog.author}</p>
            <p>Author: {blog.author}</p>

        </div>)
    })}
</div> );
}
 
export default BlogList;