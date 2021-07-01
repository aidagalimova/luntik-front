import React, { useEffect, useState, useRef } from "react";
import { Input } from "antd";
import FilmsList from "../search-films-list";
import "./index.scss";
function Search() {

    const [searchString, setSearchString] = useState('');
    const [isClose, setIsClose] = useState(true);
    const inputRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
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
        console.log(value);
        setSearchString(value);
    };
    return (
        <>
            <Input
                type="text"
                className="films__search"
                placeholder="Поиск..."
                onChange={(e) => onChangeSearch(e)}
                value={searchString}
            />
            {searchString && !isClose && <FilmsList filter={searchString} />}
        </>
    )
}
export default Search;