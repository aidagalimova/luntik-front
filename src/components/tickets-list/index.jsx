import React from "react";
import Ticket from "../ticket";
import { Row, Col } from "antd";
import "./index.scss";

function TicketsList() {
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const ticketsList = tickets.map((dayTickets) => {
        return (
            <Row key={dayTickets.date} className="tickets-row">
                <Col span={24}>
                    <h1 className="text">{dayTickets.date.toLocaleString("ru", options)}</h1>
                </Col>
                {dayTickets.tickets.map((ticket) => {
                    return (<Ticket ticket={ticket} key={ticket.id} />)
                })}
            </Row>
        )
    });

    return (
        <>
            <Row className="tickets-list">
                {!ticketsList.length?
                    <h1 className="text title">У вас нет билетов</h1> :
                    <>
                        <Col span={24}> <h1 className="text title">Ваши билеты</h1></Col>
                        {ticketsList}
                    </>
                }
            </Row>
        </>
    )

}

const tickets = [
    {
        date: new Date(2021, 6, 25),
        tickets:
            [
                {
                    id: 1,
                    name: "Лука",
                    start: "14:00",
                    hall: 1,
                    row: 8,
                    place: 12
                },
                {
                    id: 2,
                    name: "Лука",
                    start: "14:00",
                    hall: 1,
                    row: 8,
                    place: 12
                },
                {
                    id: 3,
                    name: "Лука",
                    start: "14:00",
                    hall: 1,
                    row: 8,
                    place: 12
                },
                {
                    id: 4,
                    name: "Лука",
                    start: "14:00",
                    hall: 1,
                    row: 8,
                    place: 12
                }

            ]
    },
    {
        date: new Date(2021, 6, 26),
        tickets:
            [
                {
                    id: 5,
                    name: "Лука",
                    start: "14:00",
                    hall: 1,
                    row: 8,
                    place: 12
                }

            ]
    }];

export default TicketsList;