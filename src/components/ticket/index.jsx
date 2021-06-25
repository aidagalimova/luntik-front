import { Col } from "antd";
import React from "react";
import "./index.scss";

function Ticket(props) {
    return (
        <Col span={12} className="ticket-col">
            <div className="ticket">
                <h3 className="text">Название фильма: {props.ticket.name}</h3>
                <h3 className="text">Начало: {props.ticket.start}</h3>
                <h3 className="text">Зал {props.ticket.hall}, ряд {props.ticket.row}, место {props.ticket.place}</h3>
            </div>
        </Col>
    )
}

export default Ticket;