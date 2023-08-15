const Clock = ({minutes, seconds}) => {
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return (
        <div>
            <h1>{formattedMinutes}:{formattedSeconds}</h1>
        </div>
    );
};

export default Clock;
