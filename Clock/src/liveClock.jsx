import React, {useState, useEffect } from 'react';

function LiveClock() {
    const [time , setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(timer)
    },[])

    const formattedTime = time.toLocaleTimeString();

    return (
        <div style={{textAlign:'center', marginTop: '50px', fontSize:'2rem'}}>

            <p>🕒 Current Time:</p>
            <strong>{formattedTime}</strong>
        </div>
    )
}

export default LiveClock;