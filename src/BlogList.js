import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {


    return (<div className="blog-list">
        <h1>{title}</h1>
        {blogs.map((blog) => {
            return (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/details/${blog.id}`}>
                        <h2>Title: {blog.title}</h2>
                        <p>Author: {blog.author}</p>
                    </Link>
                </div>)
        })}
    </div>);
}

export default BlogList;