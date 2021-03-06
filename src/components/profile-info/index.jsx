import React from "react";
import "./index.scss";
import { Row, Col } from "antd";
import ChangeInfoWindow from "../change-info-window";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../store/reducers/userReducer";
import { Redirect } from "react-router-dom";
const userInfo = {
    name: "UserName",
    email: "username@gmail.com"
}
function ProfileInfo() {

    const dispatch = useDispatch()

    var obj = JSON.parse(sessionStorage.getItem('user'));
    const exit = () => {
        dispatch(deleteUser());
        sessionStorage.removeItem('user')
        window.location.reload();
    }
    return (
        <div className="profile-info">
            <Row>
                <Col span={22} offset={2}>
                    <h1 className="name"> Здравствуйте, {obj.firstName}! </h1>
                    <Row>
                        <Col span={9} className="text-col">
                            <ChangeInfoWindow email={obj.email} name={obj.firstName} />
                        </Col>
                        <Col span={2}>
                            <h2 className="text" onClick={exit}>Выйти</h2>
                        </Col>
                        <Col span={13}></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default ProfileInfo;