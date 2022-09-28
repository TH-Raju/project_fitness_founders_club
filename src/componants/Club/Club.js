import React, { useEffect, useState } from 'react';
import Session from '../Session/Session';
import Profile from '../Profile/Profile';
import './Club.css';
const Club = () => {
    const [sessions, setSession] = useState([]);
    const [times, setTime] = useState([]);


    useEffect(() => {
        fetch('resource.json')
            .then(res => res.json())
            .then(data => setSession(data));
    }, [])

    const timeAdded = (session) => {

        const newTime = [...times, session];
        setTime(newTime);

    }

    return (
        <div className='full'>
            <div className="cards">
                {
                    sessions.map(session => <Session
                        key={session.id}
                        session={session}
                        timeAdded={timeAdded}
                    ></Session>)

                }
            </div>
            <div className="second">
                <Profile
                    times={times}
                ></Profile>

            </div>
        </div>
    );
};

export default Club;