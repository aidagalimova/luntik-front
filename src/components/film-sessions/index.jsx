import React from "react";
import SessionDatesCarousel from "../sessions-dates-carousel"
import "./index.scss";
function FilmSessions({ id }) {
    return (
        <div className="sessions">
            <h1 className="title">Сеансы</h1>
            <SessionDatesCarousel id={id}/>
        </div>
    )
}

export default FilmSessions