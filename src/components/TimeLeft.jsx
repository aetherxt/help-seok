import moment from "moment/moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment)

const TimeLeft = ({
    currentSessionType,
    timerStartStop,
    timerStartStopLabel,
    timeLeft, 
    resetButton
}) => {   
    const formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    return (
        <div>
            <div className="text-5xl font-black text-secondary pb-3 capitalize">{currentSessionType}</div>
            <div className="text-6xl font-bold text-primary pb-3">{formatTimeLeft}</div>
            <div className="flex justify-center">
                <button onClick={timerStartStop} className="btn btn-active btn-primary mx-2">{timerStartStopLabel}</button>
                <button onClick={resetButton} className="btn btn-active btn-primary mx-2">Reset</button>
            </div>
        </div>
    );
};

export default TimeLeft;