import React, { useEffect, useState } from 'react';
import Session from '../Session/Session';
import Profile from '../Profile/Profile';
import './Club.css';
const Club = () => {
    const [sessions, setSession] = useState([]);


    useEffect(() => {
        fetch('resource.json')
            .then(res => res.json())
            .then(data => setSession(data));
    }, [])


    return (
        <div className='full'>
            <div className="cards">
                {
                    sessions.map(session => <Session
                        key={session.id}
                        session={session}
                    ></Session>)

                }
            </div>
            <div className="second">
                <Profile></Profile>

            </div>
        </div>
    );
};

export default Club;