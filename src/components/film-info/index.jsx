import React from "react";
import { Row, Col } from "antd";
import "./index.scss";

function FilmInfo(props) {
    
    return (
        <div className="film-info">
            <Row className="film-row">
                <Col span={24}>
                    <h1 className="title">{props.filmInfo.name}</h1>
                </Col>
                <Col span={7} >
                    <img src={props.filmInfo.poster} className="photo" />
                </Col>
                <Col span={16} offset={1} className="text-col">
                    <h3 className="text">{props.filmInfo.description}</h3>
                    <h3 className="text">Продолжительность: {props.filmInfo.duration} минут</h3>
                    <h3 className="text">Жанр: {props.filmInfo.category}</h3>
                </Col>
            </Row>
        </div>
    )
}

export default FilmInfo;