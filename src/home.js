import React, {useEffect, useState} from 'react';
import BlogList from "./blogList";
import UseFetch from "./useFetch";

const Home = (props) => {

    const {data: blogs, isPending, error} = UseFetch("http://localhost:8000/blogs");
    // const [name, setName]  = useState("lahiru");

    // const handleClick = () => {
    //     console.log("hello, lahiru");
    //     setName("Tissera");
    // }

    // const handleDelete =(id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    return (
        <div className={"home"}>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"} /*handleDelete={handleDelete}*//>}

        </div>
    );
}

export default Home;