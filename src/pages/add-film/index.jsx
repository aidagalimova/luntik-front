import React from "react";
import { Form, Input, Calendar, Button, Row, Col } from "antd";
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import "./index.scss";
import { useState } from "react";
import { useEffect } from "react";
import AddFilmSessions from "../../components/add-film-sessions";

function AddFilmPage() {
    const [isInfo, setIsInfo] = useState(true);
    const [filmInfo, setFilmInfo] = useState(
        {
            name: "",
            discription: "",
            genre: "",
            duration: ""
        }
    );
    const setSessions = (values) => {
        setIsInfo(false);
        setFilmInfo({
            name: values.name,
            discription: values.discription,
            genre: values.genre,
            duration: values.duration
        });

        console.log(filmInfo);
    }

    if (isInfo) {
        return (<div className="page">
            <h1 className="add-film-text">Добавить фильм</h1>
            <Form onFinish={setSessions}>
                <Form.Item
                    name="name"
                    label="Название фильма"
                    labelCol={{ span: 24 }}
                    rules={[{
                        required: true
                    }]}>
                    <Input
                        className="name-input" />
                </Form.Item>

                <Form.Item
                    name="discription"
                    label="Описание фильма" labelCol={{ span: 24 }}
                    rules={[{
                        required: true
                    }]}>
                    <Input.TextArea
                        className="discription-input" />
                </Form.Item>


                <Form.Item
                    name="genre"
                    label="Жанр фильма" labelCol={{ span: 24 }}
                    rules={[{
                        required: true
                    }]}>
                    <Input

                        className="name-input" />
                </Form.Item>


                <Form.Item
                    name="duration"
                    label="Продолжительность" labelCol={{ span: 24 }}
                    rules={[{
                        required: true
                    }]}>
                    <Input
                        className="time-input"
                        type="time" />
                </Form.Item>
                <Button htmlType="submit" className="save-times"><h2 className="btn-text">Сохранить информацию о фильме</h2></Button>
            </Form>
        </div>)
    } else {
        return (
            <>
                <h1 className="sessions-text">Сеансы</h1>
                <AddFilmSessions filmInfo={filmInfo} />
            </>)
    }
}

export default AddFilmPage;