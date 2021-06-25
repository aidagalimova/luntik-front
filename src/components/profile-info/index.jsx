import React from "react";
import "./index.scss";
import { Row, Col } from "antd";
import ChangeInfoWindow from "../change-info-window";

const userInfo = {
    name: "UserName",
    email: "username@gmail.com"
}
function ProfileInfo() {
    return (
        <div className="profile-info">
            <Row>
                <Col span={22} offset={2}>
                    <h1 className="name"> Здравствуйте, {userInfo.name}! </h1>
                    <Row>
                        <Col span={9} className="text-col">
                            <ChangeInfoWindow email={userInfo.email} name={userInfo.name} />
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