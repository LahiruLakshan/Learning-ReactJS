import React, {useState} from 'react';

const Home = (props) => {
    const [blogs, setBBlogs] = useState([
        {title: "My new Website", body: "lorem ipsum...", author: "lakshan", id: 1},
        {title: "Welcome party!", body: "lorem ipsum...", author: "lahiru", id: 2},
        {title: "Web dev top tip", body: "lorem ipsum...", author: "stark", id: 3}
    ]);
    const handleClick = () => {
        console.log("hello, lahiru");
    }


    return (
        <div className={"home"}>

            {blogs.map((blog) => (
                <div className={"blog-preview"} key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}

            {/*<h2>Home Page</h2>*/}
            {/*<button onClick={handleClick}>Click me</button>*/}
        </div>
    );
}

export default Home;