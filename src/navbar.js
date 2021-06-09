import React from 'react';
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={"navbar"}>
            <h1>TO-DO Blog</h1>
            <div className={"links"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/create"} className={"new-blog"} /*style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius: "8px"
                }}*/>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;