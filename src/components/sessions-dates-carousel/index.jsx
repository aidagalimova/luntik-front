import React, { useEffect, useState } from "react";
import "./index.scss";
import { ReactComponent as ArrowRight } from "./svg/arrowToRight.svg"
import { ReactComponent as ArrowLeft } from "./svg/arrowToLeft.svg"
import { Row, Col } from "antd";
import FilmTime from "../film-time";

const days = [];
var options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
};

let j = -1;
let curMonth = -1;
for (let i = 0; i < 40; i++) {
    let date = new Date();
    date.setDate(date.getDate() + i);
    if (date.getMonth() !== curMonth) {
        j++;
        days[j] = [];
        curMonth = date.getMonth();
    }
    days[j].push(date
        .toLocaleString("ru", options)
        .replace(",", "")
        .replace("понедельник", "ПН")
        .replace("вторник", "ВТ")
        .replace("среда", "СР")
        .replace("четверг", "ЧТ")
        .replace("пятница", "ПТ")
        .replace("суббота", "СБ")
        .replace("воскресенье", "ВС")
        .split(" "));
}


let daysList = [];

function SessionDatesCarousel({ id }) {

    const [selectedDay, setSelectedDay] = useState(days[0][0][1]);
    const [scroll, setScroll] = useState(0);
    const [filmTimes, setFilmTimes] = useState([]);
    useEffect(() => {
        const element = document.getElementsByClassName('day ' + selectedDay);
        element[0].style.backgroundColor = "#30313D";
        console.log(days[0][0])
        getFilmTimes(days[0][0]);
    }, []);

    //горизонтальный скролл при нажатии на стрелки
    function doScroll(x) {
        const el = document.getElementsByClassName("table-container")[0];

        if (scroll + x < 0) {
            el.scrollTo({
                left: scroll - scroll,
                behavior: 'smooth',
            })
            setScroll(0)
        }
        else {
            el.scrollTo({
                left: scroll + x,
                behavior: 'smooth',
            })
            setScroll(scroll + x)
        }
    }

    // сменить стиль кнопки дня, получить время сеансов которые есть на этот день
    const onDayClick = (day) => {
        const prevElement = document.getElementsByClassName('day ' + selectedDay);
        prevElement[0].style.backgroundColor = null;

        const element = document.getElementsByClassName('day ' + day[1]);
        element[0].style.backgroundColor = "#30313D";
        setSelectedDay(day[1]);
        getFilmTimes(day);
    }

    // получить все залы и времена которые есть на конкретный день
    const getFilmTimes = (day) => {
        let dayStr = (day + "").replaceAll(",", " ")
        let halls = dates.find(date => date.date === dayStr)
        if (halls === undefined) {
            setFilmTimes(<h1 className="no-tickets-text">Билетов нет</h1>);
            return
        }
        let i = 0
        halls = halls.halls;
        const times = halls.map((hall) => {
            console.log(1, hall);
            return (
                <><Col span={24} className="hall-col">
                    <div> <h1 className="hall-text">Зал {hall.number}</h1></div></Col>
                    {
                        hall.times.map((time) => { return (<Col span={2} key={i++} className="film-time-col"><FilmTime time={time} /></Col>) })
                    }
                </>
            )
        })

        setFilmTimes(times);
    }

    for (let i = 0; i < days.length; i++) {
        daysList[i] = [];
        daysList[i] = days[i].map((day) => {
            let number = day[1];
            let weekDay = day[0];
            let month = day[2]
            return (
                <td onClick={() => onDayClick(day)} key={number + month}>
                    <div className={"day " + number}>
                        <h1 className="number">{number}</h1>
                        <h3 className="month">{month}</h3>
                        <h3 className="weekDay">{weekDay}</h3>
                    </div>
                </td>)
        })
        daysList[i].month = days[i][0][2];
    }

    return (
        <>
            <Row className="carousel-row">
                <Col span={2}>
                    <ArrowLeft className="left" onClick={() => doScroll(-200)} />
                </Col>
                <Col span={20}>
                    <div className="table-container">
                        <table>
                            <tbody>
                                <tr>
                                    {daysList[0]}
                                    {daysList[1]}
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </Col>
                <Col span={2}>
                    <ArrowRight className="right" onClick={() => doScroll(200)} />
                </Col>
            </Row>
            <Row className="film-time-row">{filmTimes}</Row>
        </>)
}

const dates = [
    {
        date: "ПН 28 июня",
        halls: [{
            number: 1,
            times: ["14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00",
                "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00"]
        }, {
            number: 2,
            times: ["14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00"]
        }]
    },
    {
        date: "ВТ 29 июня",
        halls: [{
            number: 1,
            times: ["14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00"]
        }]
    },
    {
        date: "СР 30 июня",
        halls: [{
            number: 1,
            times: ["14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00"]
        }, {
            number: 1,
            times: ["14:00", "14:00"]
        }]
    },
    {
        date: "ЧТ 1 июля",
        halls: [{
            number: 2,
            times: ["14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00"]
        }, {
            number: 3,
            times: ["14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00", "14:00"]
        }]
    }
];

export default SessionDatesCarousel;