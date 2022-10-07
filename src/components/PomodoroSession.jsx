import moment from "moment/moment";

const Session = ({
    sessionLength,
    increaseSession,
    decreaseSession,
}) => {
    const sessionLengthMinute = moment.duration(sessionLength, 's').asMinutes()
    return (
        <div>
            <h2 className="text-3xl font-semibold text-secondary pb-3">Session</h2>
            <h1 className="text-4xl font-bold text-primary pb-3">{sessionLengthMinute} Minutes</h1>
            
            <button className="btn btn-primary btn-outline btn-square text-2xl font-bold mx-2" onClick={decreaseSession}>-</button>
            <button className="btn btn-primary btn-outline btn-square text-2xl font-bold mx-2" onClick={increaseSession}>+</button> 
        </div>
    );
};

export default Session;