const NavBar = ({changeMode}) => {
    return (
        <div>
            <button onClick = {() => changeMode("work")}>Work Mode</button>
            <button onClick = {() => changeMode("break")}>Break Mode</button>
        </div>
    );
};

export default NavBar;
