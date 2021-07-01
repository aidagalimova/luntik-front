import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import FilmItem from "../search-film-item";
function FilmsList({ filter }) {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [numShow, setNumShow] = useState(5);

    const filterList = (list, filter) => {
        if (!filter) { return []; }
        else {
            return list.filter((film) => {
                return film.name.toLowerCase().includes(filter.toLowerCase())
            });
        }
    }
    useEffect(() => {
        setList(filmss);
    });

    useEffect(() => {
        setFilteredList(filterList(list, filter));

    }, [filter, list]);

    const onScroll = (e) => {
        if (e.target.offsetHeight + e.target.scrollTop === e.target.scrollHeight) {
            setNumShow(Math.min(numShow + 2, filteredList.length))
        }
    };

    const films = filteredList
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
            {films.length !== 0 ?
                <>
                    {films}
                </> :
                <div className="notfound">
                    <h2 className="text">Ничего не найдено</h2>
                </div>
            }
        </div>
    );
}

export default FilmsList;

const filmss = [{
    id: 1,
    name: "aaa"
}, {
    id: 2,
    name: "aab"
}, {
    id: 3,
    name: "aab"
}, {
    id: 4,
    name: "abb"
}, {
    id: 5,
    name: "bbb"
}, {
    id: 6,
    name: "aaa"
}, {
    id: 7,
    name: "aba"
}, {
    id: 8,
    name: "abb"
}, {
    id: 9,
    name: "abb"
}, {
    id: 10,
    name: "abb"
}, {
    id: 11,
    name: "abb"
}];