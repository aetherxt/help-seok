import ResponsiveNav from "../components/Navbar";
import { ClockIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import Break from "../components/PomodoroBreak"; 
import Session from "../components/PomodoroSession";
import TimeLeft from "../components/TimeLeft";


const Pomodoro = () => {
    // Session
    const [sessionLength, setSessionLength] = useState(300)
    
    const decreaseSession = () => {
        let newSessionLength = sessionLength - 60
        if (newSessionLength < 0){
            setSessionLength(0);
        } else {
            setSessionLength(newSessionLength);
        }
    };
    
    const increaseSession = () => {
        let newSessionLength = sessionLength + 60
        if (newSessionLength > 18000) {
            setSessionLength(18000);
        } else {
            setSessionLength(newSessionLength);
        }
    }
    
    //Break 
    const [breakLength, setBreakLength] = useState(300)
    
    const decreaseBreak = () => {
        let newBreakLength = breakLength - 60
        if (newBreakLength < 0){
            setBreakLength(0);
        } else {
            setBreakLength(newBreakLength);
        }
    };
    
    const increaseBreak = () => {
        let newBreakLength = breakLength + 60
        if (newBreakLength > 18000) {
            setBreakLength(18000);
        } else {
            setBreakLength(newBreakLength);
        }
    }
    
    return (
        <div>
            <ResponsiveNav />
            <div className="stats shadow pt-3">
                <div className="stat">
                    <div className="stat-value text-primary flex align-middle tracking-wide"><ClockIcon className="w-10 h-10 pr-2" />Pomodoro Timer</div>
                    <div className="stat-title">Concentrate on your work</div>
                </div>
            </div>
            <div className="hero bg-base-200 rounded-lg shadow px-5">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div><TimeLeft breakLength={breakLength} sessionLength={sessionLength}/></div>
                        <div className="flex">
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