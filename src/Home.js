import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'luigi', id: 3 }

    ])

    const [name, setName] = useState('mario');
    const handleDelete = (id) => {

        const newBlogs = blogs.filter((blog) => blog.id !== id);

        setBlogs(newBlogs);
    }
    useEffect(() => {
        console.log("use effect run")
    }, [name])
    return (
        <div className="home">
            
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <button onClick={() => setName("luigi") }>setname</button>
            <p>{name}</p>
        </div>
    );
}

export default Home; 