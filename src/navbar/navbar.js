import { useState, useEffect } from "react";

import "./navbar.css";
import google from "./navbar-img/google.png";

const Navbar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setTimeout(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [currentDate]);

    const time = `${currentDate.getFullYear()}.${
        currentDate.getMonth() + 1
    }.${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    return (
        <div className="navbar">
            <div className="navbar-left">
                <img className="google-icon" src={google} alt="google" />
                <input className="input" type="text" />
            </div>
            <div className="navbar-right">{time}</div>
        </div>
    );
};

export default Navbar;
