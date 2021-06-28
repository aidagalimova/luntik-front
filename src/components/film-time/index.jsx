import React from "react";
import "./index.scss";

function FilmTime({time}){
    return (
        <div className="time-div"><h2 className="time">{time}</h2></div>
    )
}
export default FilmTime;