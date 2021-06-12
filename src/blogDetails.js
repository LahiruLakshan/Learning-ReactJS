import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import UseFetch from "./useFetch";
import BlogList from "./blogList";
function BlogDetails(props) {
    const {id} = useParams();
    const {data: blog, isPending, error} = UseFetch("http://localhost:8000/blogs/"+id);
    const history = useHistory();

    const handleDelete =(id) => {
        fetch("http://localhost:8000/blogs/"+blog.id,{
            method:"DELETE"
        }).then(() =>{
            history.push("/");
        })
    }
    return (
        <div className={"blog-details"}>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;