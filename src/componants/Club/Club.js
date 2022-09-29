import React, { useEffect, useState } from 'react';
import Session from '../Session/Session';
import Profile from '../Profile/Profile';
import './Club.css';
import Blog from '../Blog/Blog';
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
        <div>
            <div className='full'>
                <div>
                    <h1 class="ffc">FFC - Fitness Foundations Club</h1>
                    <h1>Select today's excercise</h1>
                    <div className="cards">

                        {
                            sessions.map(session => <Session
                                key={session.id}
                                session={session}
                                timeAdded={timeAdded}
                            ></Session>)

                        }
                    </div>
                </div>
                <div className="second">
                    <Profile
                        times={times}
                    ></Profile>

                </div>
            </div>
            <Blog></Blog>
        </div>
    );
};

export default Club;