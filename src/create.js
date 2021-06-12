import React, {useState} from 'react';

function Create(props) {

    const [title, setTitle] = useState();
    return (
        <div className={"create"}>
            <h2>Add a new blog</h2>
            <form>
                <label>Blog Title:</label>
                <input type={"text"} value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label>Blog Body:</label>
                <textarea required></textarea>
                <label>Blog author:</label>
                <select>
                    <option value={"lahiru"}>lahiru</option>
                    <option value={"Tissera"}>Tissera</option>
                </select>
                <button>Add Blogs</button>
            </form>
        </div>
    );
}

export default Create;