import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
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


function Months() {
    const [selectedDay, setSelectedDay] = useState(days[0][0][1]);
    const element = document.getElementsByClassName('day ' + selectedDay);
    useEffect(() => {
        const element = document.getElementsByClassName('day ' + selectedDay);
        element[0].style.backgroundColor = "#B2A2CB";
        console.log(selectedDay);
    });


    const onClick = (number) => {
        const prevElement = document.getElementsByClassName('day ' + selectedDay);
        prevElement[0].style.backgroundColor = null;
        const element = document.getElementsByClassName('day ' + number);
        element[0].style.backgroundColor="#B2A2CB";
        setSelectedDay(number);
    }

    for (let i = 0; i < days.length; i++) {
        daysList[i] = days[i].map((day) => {
            let number = day[1];
            let weekDay = day[0];
            return (
                <td onClick={() => onClick(number)}>
                    <div className={"day " + number} key={number}>
                        <h1 className="number">{number}</h1>
                        <h1 className="weekDay">{weekDay}</h1>
                    </div>
                </td>)
        })
    }
    return (<>
        <table>
            <tr>
                <td>
                    Июнь
                </td>
            </tr>
            <tr>
                {daysList[0]}
            </tr>
        </table>
    </>)
}
export default Months