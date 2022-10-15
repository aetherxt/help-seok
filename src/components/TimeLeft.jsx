import moment from "moment/moment";
import momentDurationFormatSetup from "moment-duration-format";
import { useEffect } from "react";

momentDurationFormatSetup(moment)

const TimeLeft = ({
    currentSessionType,
    timerStartStop,
    timerStartStopLabel,
    timeLeft, 
    resetButton,
    percentTimeLeft
}) => {   
    const formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    let splitTime = formatTimeLeft.split(":");
    const timeLeftMinutes = Number(splitTime[0]);
    const timeLeftSeconds = Number(splitTime[1]);
    console.log(timeLeftMinutes, timeLeftSeconds)
    
    const tlmStyle = {
        '--value': timeLeftMinutes
    }
    const tlsStyle = {
        '--value': timeLeftSeconds
    }
    
    return (
        <div>
            <div className="text-5xl font-black text-secondary pb-3 capitalize">{currentSessionType}</div>
            <div className="flex gap-5 justify-center pb-3">
                <div>
                    <span className="countdown font-mono text-6xl text-primary">
                        <span id="timeLeftMinutes" style={tlmStyle} />
                    </span>
                    min
                </div> 
                <div>
                    <span className="countdown font-mono text-6xl text-primary">
                        <span id="timeLeftSeconds" style={tlsStyle} />
                    </span>
                    sec
                </div>
            </div>
            <progress className="progress progress-secondary w-80 mb-5" value={percentTimeLeft} max="100"></progress>
            <div className="flex justify-center">
                <button onClick={timerStartStop} className="btn btn-active btn-primary mx-2">{timerStartStopLabel}</button>
                <button onClick={resetButton} className="btn btn-active btn-primary mx-2">Reset</button>
            </div>
        </div>
    );
};

export default TimeLeft ;