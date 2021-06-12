import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Create(props) {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState("lahiru");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);
        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            setIsPending(false);
            history.push("/")
        })
    }

    return (
        <div className={"create"}>
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type={"text"} value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label>Blog Body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)}  required></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)} >
                    <option value={"lahiru"}>lahiru</option>
                    <option value={"kusal"}>kusal</option>
                    <option value={"dimuth"}>dimuth</option>
                    <option value={"kalana"}>kalana</option>
                    <option value={"Tissera"}>Tissera</option>
                </select>
                { !isPending && <button>Add Blogs</button>}
                { isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;