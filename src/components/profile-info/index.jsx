import React from "react";
import "./index.scss";
import { Row, Col } from "antd";
import ChangeInfoWindow from "../change-info-window";
import {useDispatch, useSelector} from "react-redux";

const userInfo = {
    name: "UserName",
    email: "username@gmail.com"
}
function ProfileInfo() {
    
    var obj = JSON.parse(sessionStorage.getItem('user'));

    return (
        <div className="profile-info">
            <Row>
                <Col span={22} offset={2}>
                    <h1 className="name"> Здравствуйте, {obj.firstName}! </h1>
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