import { useState } from "react";

const Home = () => {

    const [blogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'luigi', id: 3 }

    ])
    return (
        <div className="home">
            {blogs.map((blog) => { return(
                <div className="blog-preview" key={blog.id}>
                    <h2>Title: {blog.title}</h2>
                    <p>Author: {blog.author}</p>
                </div>)
            })}
        </div>
    );
}

export default Home;