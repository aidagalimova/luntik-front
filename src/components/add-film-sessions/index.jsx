import React from "react";
import { Form, Input, Calendar, Button, Row, Col, notification} from "antd";
import locale from 'antd/es/date-picker/locale/ru_RU';
import "./index.scss";
import { useState } from "react";
import { useEffect } from "react";

const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

function AddFilmSessions({ filmInfo }) {
    const [dates, setDates] = useState([]);
    const [datesInfo, setDatesInfo] = useState([
        {
            dates: "",
        }
    ])

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setDates([])
        setIsLoaded(true);
        console.log(12, dates);
    }, [])


    function onChange(value, mode) {
        const date = value._d.toLocaleString("ru", options);
        setDatesInfo(prevItems => [...prevItems, {
            dates: date,
            times: []
        }]);
        setDates(prevItems => [...prevItems,
        <>
            <Form
                initialValues={{ date }}
                className="date-time"
                onFinish={(values) => addTimes(values)}>
                <Form.Item name="date">
                    <h1 className="date-text">
                        {date}
                    </h1>
                </Form.Item >
                <Row>
                    <Col span={2}>
                        <Form.Item
                            className="date-time-form"
                            name="first">
                            <Input
                                className="date-time-input"
                                type="time" />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item className="date-time-form" name="second">
                            <Input
                                className="date-time-input"
                                type="time" />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item className="date-time-form" name="three">
                            <Input
                                className="date-time-input"
                                type="time" />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item className="date-time-form" name="four">
                            <Input
                                className="date-time-input"
                                type="time" />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item className="date-time-form" name="five">
                            <Input
                                className="date-time-input"
                                type="time" />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item className="date-time-form" name="six">
                            <Input
                                className="date-time-input"
                                type="time" />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item className="date-time-form" name="seven">
                            <Input
                                className="date-time-input"
                                type="time" />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item className="date-time-form" name="eight">
                            <Input
                                className="date-time-input"
                                type="time" />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item className="date-time-form" name="nine">
                            <Input
                                className="date-time-input"
                                type="time" />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item className="date-time-form" name="ten">
                            <Input
                                className="date-time-input"
                                type="time" />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Button htmlType="submit" className="save-times"><h2 className="btn-text">Сохранить времена сеансов</h2></Button>
                    </Col>
                </Row>
            </Form>
        </>]);
    }

    const addTimes = (values) => {
        for (let key in values) {
            if (values[key] !== undefined && key !== "date") {
                values[key] = `${values.date} ${values[key]}`
            } else if (key !== "date") {
                delete values[key];
            }
        }
        delete values.date;
        notification.open({type: "success", message: "Вы сохранили новое время ;)"});
    }

    if (isLoaded) {
        return (
            <>
                <Calendar
                    fullscreen={false}
                    locale={locale}
                    className="calendar"
                    onChange={onChange}
                    onPanelChange={null}
                    mode="month"
                />
                {dates}
                {dates.length !== 0 ?
                    <Button className="save-film"><h2>Добавить новый фильм</h2></Button>
                    : <></>}
            </>
        )
    } else {
        return (<div>Загрузка...</div>)
    }
}

export default AddFilmSessions;