import React from "react";
import "./index.scss";
import { Row, Col } from "antd";

function ProfileInfo() {
    return (
        <div className="profile-info">
            <Row>
                <Col span={22} offset={2}>
                    <h1 className="name"> Здравствуйте, UserName! </h1>
                    <Row>
                        <Col span={9} className="text-col">
                            <h2 className="text">Изменить личные данные</h2>
                        </Col>
                        <Col span={2}>
                            <h2 className="text">Выйти</h2>
                        </Col>
                        <Col span={13}></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default ProfileInfo;