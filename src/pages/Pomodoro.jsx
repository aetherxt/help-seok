import ResponsiveNav from "../components/Navbar";
import { ClockIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import moment from "moment/moment";

import Break from "../components/PomodoroBreak"; 


const Pomodoro = () => {
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
    
    const breakLengthMinute = moment.duration(breakLength, 's').asMinutes()
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
                        <h2 className="text-3xl font-semibold text-secondary pb-3">Break</h2>
                        <h1 className="text-4xl font-bold text-primary pb-3">{breakLengthMinute} Minutes</h1>
                        
                        <button className="btn btn-primary btn-outline btn-square text-2xl font-bold mx-2" onClick={increaseBreak}>+</button> 
                        <button className="btn btn-primary btn-outline btn-square text-2xl font-bold mx-2" onClick={decreaseBreak}>-</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pomodoro;