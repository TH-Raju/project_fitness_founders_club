import './Profile.css';

const Profile = (props) => {
    const { times } = props;

    // For Estimate Time 

    let total = 0;
    for (const timeTotal of times) {
        total += timeTotal.time;
    }

    //Break Time

    const breakTime = (e) => {
        const bt = document.getElementById('bT');
        bt.innerText = e;
    }




    return (
        <div className='pro'>
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
                <button onClick={() => breakTime(15)} className="button" >15m</button>
                <button onClick={() => breakTime(30)} className="button">30m</button>
                <button onClick={() => breakTime(45)} className="button">45m</button>
                <button onClick={() => breakTime(60)} className="button">60m</button>
            </div>

            <h2>Exercise Details</h2>
            <div className="e-time">
                <h3>Estimate Time </h3>
                <p><span>{total} </span>minutes</p>
            </div>
            <div className="e-time">
                <h3>Break Time </h3>
                <p><span id="bT">0 </span> minutes</p>
            </div>
            <button className="buton">Activity Completed</button>
        </div>
    );
};

export default Profile;