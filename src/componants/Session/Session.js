import React from 'react';
import './Session.css';

const Session = (props) => {
    const { img, name, description, age, time } = props.session;
    return (
        <div className="cart">
            <img src={img} alt="" className="img" />
            <div className="description">
                <h1>{name}</h1>
                <p>{description}</p>
                <h3>Age: {age}</h3>
                <h3>Time: <span>{time}</span> minute</h3>
            </div>
            <button className="btn">Add to list</button>
        </div>
    );
};

export default Session;