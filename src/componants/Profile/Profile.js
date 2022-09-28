import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className="profile">
                <img src="../../../public/logo192.png" alt="" />
                <h2>TH Raju</h2>
            </div>
            <div className="details">
                <div className="detail">
                    <h2>70</h2>
                    <p>Weight</p>
                </div>
                <div className="detail">
                    <h2>5.5</h2>
                    <p>Height</p>
                </div>
                <div className="detail">
                    <h2>22</h2>
                    <p>Age</p>
                </div>
            </div>

            <h2>Add a Break</h2>

            <div className="break">
                <button className="button"><span>15</span>m</button>
                <button className="button"><span>30</span>m</button>
                <button className="button"><span>45</span>m</button>
                <button className="button"><span>60</span>m</button>
            </div>

            <h2>Exercise Details</h2>
            <div className="e-time">
                <h3>Estimate Time </h3>
                <p><span>0 </span>minutes</p>
            </div>
            <div className="e-time">
                <h3>Break Time </h3>
                <p><span>0 </span>minutes</p>
            </div>
            <button className="buton">Activity Completed</button>
        </div>
    );
};

export default Profile;