import React from 'react';

const Home = (props) => {
    const handleClick = () => {
        console.log("hello, lahiru");
        }


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;