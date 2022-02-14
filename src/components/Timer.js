import React, {useState, useEffect} from 'react';

function Timer(props) {
    let [time, setTime] = useState(60);
    // state to deal with display
    let [activeTimer, setActiveTimer] = useState(false);

    // when timer starts, state will be updated, which will cause this function to loop until a certain point
    useEffect(() => {
        if (time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)}
        }
        ,[time]
    );

    const startTime = () => {
        setActiveTimer(true);
        setTime(props.initialTime);
        
    }

    return (
        <div>
            <h2>{activeTimer? time : "Click the button below!"}</h2>
            <button onClick = {startTime}>Start Countdown</button>
        </div>
    );
}

export default Timer;