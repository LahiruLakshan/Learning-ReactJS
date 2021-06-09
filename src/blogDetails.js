import React from 'react';
import {useParams} from 'react-router-dom';
import UseFetch from "./useFetch";
import BlogList from "./blogList";
function BlogDetails(props) {
    const {id} = useParams();
    const {data: blog, isPending, error} = UseFetch("http://localhost:8000/blogs/"+id);
    return (
        <div className={"blog-details"}>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;