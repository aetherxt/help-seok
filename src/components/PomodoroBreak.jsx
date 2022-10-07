import moment from "moment/moment";

const Break = ({
    breakLength,
    increaseBreak,
    decreaseBreak,}
) => {
    const breakLengthMinute = moment.duration(breakLength, 's').asMinutes()
    return (
        <div>
            <h2 className="text-3xl font-semibold text-secondary pb-3">Break</h2>
            <h1 className="text-4xl font-bold text-primary pb-3">{breakLengthMinute} Minutes</h1>
            
            <button className="btn btn-primary btn-outline btn-square text-2xl font-bold mx-2" onClick={decreaseBreak}>-</button>
            <button className="btn btn-primary btn-outline btn-square text-2xl font-bold mx-2" onClick={increaseBreak}>+</button> 
        </div>
    );
};

export default Break;