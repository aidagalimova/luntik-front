import React from "react";
import { useEffect } from "react";
import Ticket from "../ticket";
import { Row, Col } from "antd";
import "./index.scss";

function TicketsList() {
    const ticketsList = tickets.map((ticket) => {
        return (<Ticket ticket={ticket} />)
    });

    return (
        <>
            <Row className="tickets-list">
                {ticketsList.length === 0 ?
                    <h1 className="text">У вас нет билетов</h1> :
                    <>
                        <Col span={24}> <h1 className="text">Ваши билеты</h1></Col>
                        {ticketsList}
                    </>
                }
            </Row>
        </>
    )

}

const tickets = [
    {
        id: 1,
        name: "Лука",
        start: "14:00",
        date: new Date(),
        hall: 1,
        row: 8,
        place: 12
    },
    {
        id: 2,
        name: "Лука",
        start: "14:00",
        date: new Date(),
        hall: 1,
        row: 8,
        place: 12
    },
    {
        id: 3,
        name: "Лука",
        start: "14:00",
        date: new Date(),
        hall: 1,
        row: 8,
        place: 12
    },
    {
        id: 4,
        name: "Лука",
        start: "14:00",
        date: new Date(),
        hall: 1,
        row: 8,
        place: 12
    },
    {
        id: 4,
        name: "Лука",
        start: "14:00",
        date: new Date(),
        hall: 1,
        row: 8,
        place: 12
    }

]

export default TicketsList;