import React, { useState } from "react";
import { Button, Modal, Form, Input, Row, Col } from "antd";
import "./index.scss";

function ChangeInfoWindow({ email, name }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isInfoModal, setIsInfoModal] = useState(true);
    const [userName, setUserName] = useState(name);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsInfoModal(true);
        setUserName(name);
        setIsModalVisible(false);
        console.log(userName);
    };

    const setInfo = (isInfo) => {
        setIsInfoModal(isInfo);
    }

    return (
        <>
            <h1
                className="change-lk-text"
                onClick={showModal} >Изменить личные данные</h1>
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                className="form"
                footer={null}>
                {isInfoModal ?
                    <>
                        <Row className="title-row">
                            <Col span={24}>
                                <h1 className="main-title">Личные данные</h1>
                            </Col>
                            <Col span={17} offset={7}>
                                <h3 className="not-main-title" onClick={() => setInfo(false)}>Сменить пароль</h3>
                            </Col>
                        </Row>
                        {ChangeInfo(email, userName)}
                    </> :
                    <>
                        <Row className="title-row">
                            <Col span={24}>
                                <h1 className="main-title">Сменить пароль</h1>
                            </Col>
                            <Col span={17} offset={7}>
                                <h3 className="not-main-title" onClick={() => setInfo(true)}>Личные данные</h3>
                            </Col>
                        </Row>
                        {ChangePassword}
                    </>
                }
            </Modal>
        </>
    )
}

const validateMessages = {
    required: 'Введите ${name}',
    string: {
        range: "Длина должна быть от ${min} до ${max}",
        min: "Минимальная длина ${min} символов"
    }
};

const SaveChangeInfo = (values) => {
    console.log(values);
};

const ChangeInfo = (email, name) => (
    <div className="change">
        <Form
            initialValues={{
                ["имя"]: name
            }}
            validateMessages={validateMessages}
            onFinish={SaveChangeInfo}
        >
            <Form.Item
                name="электронный адрес"
                className="item">
                <Input className="input email" placeholder={email} disabled />
            </Form.Item>

            <Form.Item
                name="имя"
                rules={[{ required: true, max: 10, min: 3 }]}
                className="item">
                <Input className="input" />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="signup-btn">
                <h2 className="btnText">Сохранить</h2>
            </Button>
        </Form>
    </div>
)

const SaveChangePassword = (values) => {
    console.log(values);
}

const ChangePassword = (
    <div className="change">
        <Form
            validateMessages={validateMessages}
            onFinish={SaveChangePassword}>
            <Form.Item
                name="старый пароль"
                className="item">
                <Input.Password className="input" placeholder="Старый пароль" />
            </Form.Item>

            <Form.Item
                name="пароль"
                dependencies={["пароль2"]}
                rules={[{
                    required: true,
                    min: 8
                }]}
                className="item">
                <Input.Password className="input" placeholder="Текущий пароль" />
            </Form.Item>

            <Form.Item
                name="пароль2"
                rules={[
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (getFieldValue("пароль") !== value) {
                                return Promise.reject(["Пароли должны совпадать"]);
                            }
                            return Promise.resolve();
                        }
                    })]}
                dependencies={["пароль"]}
                className="item">
                <Input.Password className="input" placeholder="Повторите пароль" />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="signin-btn">
                <h2 className="btnText">Сохранить</h2>
            </Button>
        </Form>
    </div>
)

export default ChangeInfoWindow;