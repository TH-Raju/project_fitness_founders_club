import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <h1>Blog Section</h1>
            <h2>-How does React Work?</h2>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>



            <h2>-Difference Between State and Props.</h2>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>

            <h2>-What will useEffect Do without Data Loading</h2>
            <p>It simply means that the hook will only trigger once when the component is first rendered. So for example, for useEffect it means the callback will run once at the beginning of the lifecycle of the component and never again.</p>
        </div>
    );
};

export default Blog;