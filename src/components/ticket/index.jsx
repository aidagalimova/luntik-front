import { Col } from "antd";
import React from "react";
import "./index.scss";

function Ticket(props) {
    return (
        <Col span={12} className="ticket-col">
            <a href={"/films/" + props.film.id}><div className="ticket">
                <h3 className="text">Название фильма: {props.film.name}</h3>
                <h3 className="text">Начало в  {props.seance.date.slice(11, 16)}</h3>
                {/* <h3 className="text">Зал {props.seance.hall}, ряд {props.ticket.place.slice(4,5)}, место {props.ticket.place.slice(11,12)}</h3>  */}
            </div>
            </a>
        </Col>
    )
}

export default Ticket;