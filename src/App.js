import "./App.css";
import React, {useState} from "react";
import NavBar from "./components/NavBar";
import Clock from "./components/Clock";
import ActionRow from "./components/ActionRow";

const App = () => {
    const [time, setTime] = useState({minutes: 25, seconds: 0});
    const [timer, setTimer] = useState(null);
    const [mode, setMode] = useState("work");
    const [isActive, setIsActive] = useState(false);

    const start = () => {
        if (!isActive) {
            setIsActive(true);
            setTimer(setInterval(tick, 1000));
        }
    };

    const pause = () => {
        if (isActive) {
            clearInterval(timer);
            setTimer(null);
            setIsActive(false);
        }
    };

    const reset = (mode) => {
        pause();
        const initialMinutes = mode === "work" ? 25 : 5;
        setTime({ minutes: initialMinutes, seconds: 0 });
    };

    const finished = () => {
        pause();
        setMode(!mode);
        reset();
    };

    const changeMode = (mode) => {
        setMode(mode);
        reset(mode);
    };

    const tick = () => {
        setTime(prevTime => {
            if (prevTime.minutes === 0 && prevTime.seconds === 0) {
                finished();
                return prevTime;
            }

            const newSeconds = prevTime.seconds === 0 ? 59 : prevTime.seconds - 1;
            const newMinutes = newSeconds === 59 ? prevTime.minutes - 1 : prevTime.minutes;

            return {minutes: newMinutes, seconds: newSeconds};
        });
    };

    const currentAction = isActive ? "Pause" : "Start";

    return (
        <div className = "App">
            <NavBar changeMode = {changeMode}/>
            <Clock minutes = {time.minutes} seconds = {time.seconds}/>
            <ActionRow activateAction = {isActive ? pause : start}
                       resetClicked = {reset}
                       currentAction = {currentAction}
            />
        </div>
    );
};

export default App;
