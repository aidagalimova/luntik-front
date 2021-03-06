
import Ticket from "../ticket";
import { useDispatch, useSelector } from "react-redux";
import { getTicketsByIdUser } from "../../store/actions/ticketActions"
import { React, useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./index.scss";
import { getFilmsByIdSeance } from "../../store/actions/seanceActions";

function TicketsList() {


    const [ticks, setTicks] = useState([])
    const [seancesOfUser, setSeancesOfUser] = useState([])
    const [film, setFilm] = useState([])

    var obj = JSON.parse(sessionStorage.getItem('user'))

    useEffect(async () => {

        const token = localStorage.getItem('token')

        try {
            await fetch('https://luntik-ticket.herokuapp.com/api/Tickets', {

                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }

            })
                .then((res) => res.json())
                .then((response) => {


                    setTicks(response.filter(item => item.userId === 4));

                })
        }
        catch (e) {
            console.log(e)
        }



    }, [])


    useEffect(async () => {

        const token = localStorage.getItem('token')
        var seances = [];
        try {
            await fetch('https://luntik-seance.herokuapp.com/api/Seances', {

                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer' + token
                }

            })
                .then((res) => res.json())
                .then((response) => {

                    (response.forEach(element => {
                        ticks.forEach(elem => {
                            if (elem.seanceId === element.id) {
                                seances.push(element);
                            }
                        })
                    }));
                    setSeancesOfUser(seances)


                })
        }
        catch (e) {
            console.log(e)
        }


    }, [ticks])




    useEffect(async () => {
        const token = localStorage.getItem('token')
        var films = [];
        try {
            await fetch('https://luntik-film.herokuapp.com/api/Films', {

                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer' + token
                }

            })
                .then((res) => res.json())
                .then((response) => {

                    (response.forEach(element => {
                        seancesOfUser.forEach(elem => {
                            if (elem.filmId == element.id) {
                                films.push(element);
                            }
                        })
                    }));
                    setFilm(films)

                })
        }
        catch (e) {
            console.log(e)
        }

    }, [seancesOfUser])

    console.log(ticks)
    console.log(seancesOfUser)
    console.log(film)

    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const ticketsList = seancesOfUser.map((dayTickets) => {
        return (
            <Row key={dayTickets.date.slice(0, 10)} className="tickets-row">
                <Col span={24}>
                    <h1 className="text">{dayTickets.date.slice(0, 10)}</h1>
                </Col>
                {film.filter(item => item.id === dayTickets.filmId).map((ticket) => {
                    console.log(ticket);
                    return (<Ticket film={ticket} seance={dayTickets} ticket={ticket} key={ticket.id} />)
                })}
            </Row>


        )
    });

    return (
        <>
            <Row className="tickets-list">
                {!ticketsList.length ?
                    <h1 className="text title">?? ?????? ?????? ??????????????</h1> :
                    <>
                        <Col span={24}> <h1 className="text title">???????? ????????????</h1></Col>
                        {ticketsList[0]}
                    </>
                }
            </Row>
        </>
    )

}





export default TicketsList;