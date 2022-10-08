import { useState } from "react";
import { useEffect } from "react";
import moment from "moment/moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment)

const TimeLeft = ({
    sessionLength,
    breakLength
}) => {
    const [currentSessionType, setCurrentSessionType] = useState('work');
    const [intervalId, setIntervalId] = useState(null);
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    
    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength])
    
    const isStarted = intervalId != null;
    const timerStartStop = () => {
        if (isStarted) {
            
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimeLeft => {
                    const newTimeLeft = prevTimeLeft - 1;
                    if (newTimeLeft >= 0) {
                        return prevTimeLeft - 1
                    }
                    if (currentSessionType == 'work') {
                        setCurrentSessionType('break');
                        setTimeLeft(breakLength);
                    }
                    if (currentSessionType == 'break') {
                        setCurrentSessionType('work');
                        setTimeLeft(sessionLength);
                    }
                });
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };
    
    
    const formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    return (
        <div>
            <div className="text-5xl font-black text-secondary pb-3 capitalize">{currentSessionType}</div>
            <div className="text-6xl font-bold text-primary pb-3">{formatTimeLeft}</div>
            <button onClick={timerStartStop} className="btn btn-active btn-primary">{isStarted ? 'Stop' : 'Start'}</button>
        </div>
    );
};

export default TimeLeft;