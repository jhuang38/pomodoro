import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import "../styles/Timer.css"

// make variant
const buttonAnimation = {
    initial: {
        x: '-100vw'
    },
    animate: {
        x: 0
    },
    whileHover: {
        scale: 1.1
    }
}

function Timer(props) {
    let [time, setTime] = useState(0);
    let [displayTime, setDispTime] = useState('');
    let [animationRunning, setAnimationState] = useState(false);

    // when timer starts, state will be updated, which will cause this function to loop until a certain point
    useEffect(() => {
        if (time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
            setDispTime(secondsToDisp(time));
        } else {
            // this point will be reached when 
            setDispTime(secondsToDisp(time));
            setAnimationState(false);
        }
        } ,[time]
    );

    const progressAnimation = {
        initial: {
            pathLength: 1,
            stroke: "green"
        },
        animate: {
            pathLength: 0,
            transition: {
                duration: props.initialTime * 60,
                ease: "linear"
            },
            transitionEnd: {
                stroke: "red"
            }
        }
    }

    const startTime = () => {
        setAnimationState(true);
        setTime(props.initialTime * 60);
    }
    // function converts seconds remaining into mm:ss format for countdown
    const secondsToDisp = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const minuteString = (minutes < 10)? `0${minutes}` : `${minutes}`;
        const secondString = (seconds < 10)? `0${seconds}` : `${seconds}`;
        return `${minuteString}:${secondString}`;
    }

    return (
        <div>
            <div className = "timer">
                <svg className = "timerSVG" viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg">
                    <g className = "timerCircle">
                        <circle className = "elapsedPath" cx = "50" cy = "50" r = "45"/>
                        {// path for timer elapsed circle
                        }
                        {animationRunning && <motion.path className = {`pathRemaining`} strokeDasharray={"283"} 
                        d="M 50, 50 
                        m -45, 0 
                        a 45, 45 0 1, 0 90, 0
                        a 45, 45 0 1, 0 -90, 0"
                        
                        variants = {progressAnimation}
                        initial = "initial"
                        animate = "animate"
                        >
                        </motion.path>}
                    </g>
                </svg>
                <div className = "timeLabel">
                    <h2>{displayTime}</h2>   
                </div>
            </div>
            
            <motion.button
                variants = {buttonAnimation}
                initial = "initial"
                animate = "animate"
                whileHover = "whileHover"
                onClick = {startTime}
            >Start Countdown</motion.button>
        </div>
    );
}

export default Timer;