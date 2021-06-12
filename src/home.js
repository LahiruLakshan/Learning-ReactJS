import React from 'react';
import BlogList from "./blogList";
import UseFetch from "./useFetch";

const Home = (props) => {

    const {data: blog, isPending, error} = UseFetch("http://localhost:8000/blogs");
    // const [name, setName]  = useState("lahiru");

    // const handleClick = () => {
    //     console.log("hello, lahiru");
    //     setName("Tissera");
    // }



    return (
        <div className={"home"}>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && <BlogList blogs={blog} title={"All Blogs"} /*handleDelete={handleDelete}*//>}

        </div>
    );
}

export default Home;