import { Row, Col } from "antd";
import React from "react";
import "./index.scss";
const ticket = {
    id: 1,
    name: "Лука",
    start: "14:00",
    hall: 1,
    row: 8,
    place: 12
}

function Ticket(props) {
    return (
        <Col span={12} o className="ticket-col">
            <div className="ticket">
                <h3 className="text">Название фильма: {props.ticket.name}</h3>
                <h3 className="text">Начало: {props.ticket.start}</h3>
                <h3 className="text">Зал {props.ticket.hall}, ряд {props.ticket.row}, место {props.ticket.place}</h3>
            </div>
        </Col>
    )
}

export default Ticket;