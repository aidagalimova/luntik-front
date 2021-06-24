import React, { useEffect, useState } from "react";
import "./index.scss";
import { ReactComponent as ArrowRight } from "./svg/arrowToRight.svg"
import { ReactComponent as ArrowLeft } from "./svg/arrowToLeft.svg"
import { Row, Col } from "antd";

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

function DatesCarousel() {

    const [selectedDay, setSelectedDay] = useState(days[0][0][1]);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const element = document.getElementsByClassName('day ' + selectedDay);
        element[0].style.backgroundColor = "#B2A2CB";
    });

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

    const onDayClick = (number) => {
        const prevElement = document.getElementsByClassName('day ' + selectedDay);
        prevElement[0].style.backgroundColor = null;

        const element = document.getElementsByClassName('day ' + number);
        element[0].style.backgroundColor = "#B2A2CB";
        setSelectedDay(number);
    }

    for (let i = 0; i < days.length; i++) {
        daysList[i] = [];
        daysList[i] = days[i].map((day) => {
            let number = day[1];
            let weekDay = day[0];
            let month = day[2]
            return (
                <td onClick={() => onDayClick(number)} key={number + month}>
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
        <Row>
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
        </Row>)
}
export default DatesCarousel;