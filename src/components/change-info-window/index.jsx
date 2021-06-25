import React, { useState } from "react";
import { Button, Modal, Form, Input, Row, Col } from "antd";
import "./index.scss";

function ChangeInfoWindow({ email, name }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isInfoModal, setIsInfoModal] = useState(true);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsInfoModal(true);
        setIsModalVisible(false);
    };

    const setInfo = (isInfo) => {
        setIsInfoModal(isInfo);
    }

    return (
        <>
            <h1
                className="lk-text"
                onClick={showModal} >Изменить личные данные</h1>
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                className="form"
                footer={null}>
                {isInfoModal ?
                    <>

                        <h1 className="main-title">Личные данные</h1>
                        <h2 className="not-main-title" onClick={() => setInfo(false)}>Сменить пароль</h2>
                        {ChangeInfo(email, name)}
                    </> :
                    <>
                        <h1 className="main-title">Сменить пароль</h1>
                        <h2 className="not-main-title" onClick={() => setInfo(true)}>Личные данные</h2>
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

const onSignup = (values) => {
    console.log(values);
};

const ChangeInfo = (email, name) => (
    <div className="sign">
        <Form
            validateMessages={validateMessages}
            onFinish={onSignup}
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
                <Input className="input" defaultValue={name} />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="signup-btn">
                <h2 className="btnText">Сохранить</h2>
            </Button>
        </Form>
    </div>
)

const onSignin = (values) => {
    console.log(values);
}

const ChangePassword = (
    <div className="sign">
        <Form
            validateMessages={validateMessages}
            onFinish={onSignin}>
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