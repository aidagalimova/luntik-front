import React, { useEffect, useState, useRef } from "react";
import { Input } from "antd";
import FilmsList from "../search-films-list";
import "./index.scss";
function Search({ films }) {
    const [filmsList, setFilmsList] = useState();
    const [searchString, setSearchString] = useState('');
    const [isClose, setIsClose] = useState(true);
    const [isLoad, setIsLoad] = useState(false)
    const inputRef = useRef(null);

    useEffect(() => {
        setFilmsList(films);
        document.addEventListener("mousedown", handleClickOutside);
        setIsLoad(true);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [inputRef]);

    function handleClickOutside(event) {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setIsClose(true);
        } else {
            setIsClose(false);
        }
    };

    const onChangeSearch = e => {
        const { value } = e.target;
        setSearchString(value);
    };
    if (!isLoad) {
        return (<div>Загрузка...</div>)
    } else {
        return (
            <>
                <Input
                    type="text"
                    className="films__search"
                    placeholder="Поиск..."
                    onChange={(e) => onChangeSearch(e)}
                    value={searchString}
                />
                {searchString && !isClose && <FilmsList filter={searchString} film={filmsList} />}
            </>
        )
    }
}
export default Search;