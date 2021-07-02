import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import FilmItem from "../search-film-item";
function FilmsList(props) {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [numShow, setNumShow] = useState(5);
    const [isLoad, setIsLoad] = useState(false);

    const filterList = (list, filter) => {
        if (!filter) { return []; }
        else {
            return list.filter((film) => {
                return film.name.toLowerCase().includes(filter.toLowerCase())
            });
        }
    }
    useEffect(() => {
        setList(props.film);
        setIsLoad(true);
    },[]);

    useEffect(() => {
        setFilteredList(filterList(props.film, props.filter));
    }, [props.filter]);

    const onScroll = (e) => {
        if (e.target.offsetHeight + e.target.scrollTop === e.target.scrollHeight) {
            setNumShow(Math.min(numShow + 2, filteredList.length))
        }
    };

    if (!isLoad) {
        return (<div>Загрузка...</div>)
    } else {
        const filmsHtml = filteredList
            .slice(0, numShow)
            .map((film) =>
                <Link to={`films/${film.id}`} key={film.id}>
                    <div
                        className="item">
                        <FilmItem film={film} />
                    </div>
                </Link>
            )
            ;
        return (
            <div className="list" onScroll={onScroll}>
                {list ?
                    <>
                        {filmsHtml}
                    </> :
                    <div className="notfound">
                        <h2 className="text">Ничего не найдено</h2>
                    </div>
                }
            </div>
        );
    }
}

export default FilmsList;
