import React from "react";
import { Row, Col } from "antd";
import "./index.scss";

function FilmInfo(props) {
    let genres = props.filmInfo.genres.map((genre) => {
        return (genre + " ")
    })
    return (
        <div className="film-info">
            <Row className="film-row">
                <Col span={24}>
                    <h1 className="title">{props.filmInfo.name}</h1>
                </Col>
                <Col span={7} >
                    <img src={props.filmInfo.photo} className="photo" />
                </Col>
                <Col span={16} offset={1} className="text-col">
                    <h3 className="text">{props.filmInfo.discription}</h3>
                    <h3 className="text">Продолжительность: {props.filmInfo.duration}</h3>
                    <h3 className="text">Жанр: {genres}</h3>
                </Col>

            </Row>
        </div>
    )
}

export default FilmInfo;