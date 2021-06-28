import React, { useEffect, useState } from "react";
import DatesCarousel from "../../components/dates-carousel";
import FilmInfo from "../../components/film-info";
import filmPhoto from'./filmPhoto.png';
import "./index.scss";
function getFilmInfo(id) {
    return {
        name: "Лука",
        photo: filmPhoto,
        discription: `Свои незабываемые каникулы, в которых 
        есть место и домашней пасте, и мороженному, и бесконечным поездкам на мопеде, 
        мальчик по имени Лука проводит в красивом приморском городке, 
        расположенном на итальянской Ривьере. 
        Ни одно приключение Луки не обходится без участия его нового лучшего друга, 
        и беззаботность отдыха омрачает только лишь тот факт, 
        что на самом деле в облике мальчика скрывается морской монстр из глубин лагуны, 
        на берегу которой стоит городок.`,
        genres: ["Анимация", "Приключения"],
        duration: "1:30",
    }
}

function FilmPage({ match }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [filmInfo, setFilmInfo] = useState();
    const [id, setId] = useState();
    useEffect(() => {
        setId(match.params.id)
        setFilmInfo(getFilmInfo(id));
        setIsLoaded(true);
    }, []);

    if (isLoaded) {
        return (
            <div>
                <FilmInfo filmInfo={filmInfo} className="film-info"/>
                <DatesCarousel id={id} />
            </div>
        )
    } else {
        return (<div>Загрузка...</div>)
    }

}

export default FilmPage;