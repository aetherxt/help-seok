import ResponsiveNav from "../components/Navbar";
import { ClockIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useEffect } from "react";

import Break from "../components/PomodoroBreak"; 
import Session from "../components/PomodoroSession";
import TimeLeft from "../components/TimeLeft";
import { current } from "daisyui/src/colors";


const Pomodoro = () => {
    // Session
    const defaultSessionLength = 60*25
    const defaultBreakLength = 60*5
    const [sessionLength, setSessionLength] = useState(defaultSessionLength)
    const [currentSessionType, setCurrentSessionType] = useState('work');
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    const [intervalId, setIntervalId] = useState(null);
    const [percentTimeLeft, setPercentTimeLeft] = useState(100);
    
    const decreaseSession = () => {
        let newSessionLength = sessionLength - 60
        if (newSessionLength >= 60){
            setSessionLength(newSessionLength);
        }
    };
    
    const increaseSession = () => {
        let newSessionLength = sessionLength + 60
        if (newSessionLength > 300*60) {
            setSessionLength(300*60);
        } else {
            setSessionLength(newSessionLength);
        }
    }
    
    //Break 
    const [breakLength, setBreakLength] = useState(defaultBreakLength)
    
    const decreaseBreak = () => {
        let newBreakLength = breakLength - 60
        if (newBreakLength >= 60){
            setBreakLength(newBreakLength);
        }
    };
    
    const increaseBreak = () => {
        let newBreakLength = breakLength + 60
        if (newBreakLength > 300*60) {
            setBreakLength(300*60);
        } else {
            setBreakLength(newBreakLength);
        }
    }
    
    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength])
    
    useEffect(() => {
        if (timeLeft === 0) {
            if (currentSessionType === 'work') {
                setCurrentSessionType('break');
                setTimeLeft(breakLength);
            }
            else if (currentSessionType === 'break') {
                setCurrentSessionType('work');
                setTimeLeft(sessionLength);
            }
        }
    }, [breakLength, sessionLength, currentSessionType, timeLeft])
    
    const isStarted = intervalId != null;
    const timerStartStop = () => {
        if (isStarted) {
            
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimeLeft => prevTimeLeft - 1)
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };
    
    const resetButton = () => {
        clearInterval(intervalId)
        setIntervalId(null)
        setCurrentSessionType('work')
        setSessionLength(defaultSessionLength)
        setBreakLength(defaultBreakLength)
        setTimeLeft(defaultSessionLength)
    }
    
    useEffect(() => {
        if (currentSessionType === "work") {
            let newPercentTimeLeft = Math.floor((timeLeft / sessionLength) * 100)
            setPercentTimeLeft(newPercentTimeLeft)
        }
        else if (currentSessionType == "break") {
            let newPercentTimeLeft = Math.floor((timeLeft / breakLength) * 100)
            setPercentTimeLeft(newPercentTimeLeft)
        }
    }, [currentSessionType, timeLeft, sessionLength, breakLength])
    
    return (
        <div>
            <ResponsiveNav />
            <div className="stats shadow pt-3">
                <div className="stat">
                    <div className="stat-value text-primary flex align-middle tracking-wide"><ClockIcon className="w-10 h-10 pr-2" />Pomodoro Timer</div>
                    <div className="stat-title">Concentrate on your work</div>
                </div>
            </div>
            <div className="hero rounded-lg shadow px-5">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div><TimeLeft 
                        currentSessionType={currentSessionType}
                        timerStartStop={timerStartStop}
                        timerStartStopLabel={isStarted ? 'Stop' : 'Start'}
                        timeLeft={timeLeft}
                        resetButton={resetButton}
                        percentTimeLeft={percentTimeLeft}
                        /></div>
                        <div className="flex pt-5">
                            <div className="py-4 px-5"><Break 
                            breakLength={breakLength}
                            increaseBreak={increaseBreak}
                            decreaseBreak={decreaseBreak}
                            /></div>
                            <div className="py-4 px-5"><Session 
                            sessionLength={sessionLength}
                            increaseSession={increaseSession}
                            decreaseSession={decreaseSession}
                            /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pomodoro;