import { useState } from "react";
import { useEffect } from "react";
import moment from "moment/moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment)

const TimeLeft = ({
    sessionLength,
}) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    
    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength])
    
    const timerStartStop = () => {
        setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                const newTimeLeft = prevTimeLeft - 1
                if (newTimeLeft >= 0) {
                    return prevTimeLeft - 1
                }
                return prevTimeLeft
            });
        }, 1000)
    }
    
    const formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    return (
        <div>
            <div className="text-6xl font-bold text-primary pb-3">{formatTimeLeft}</div>
            <button onClick={timerStartStop} className="btn btn-active btn-primary">Start</button>
        </div>
    );
};

export default TimeLeft;