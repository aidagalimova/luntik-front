import React from "react";
import { Button } from "antd";
import "./index.scss";
import { ReactComponent as DeleteIcon } from "./svg/delete.svg";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/reducers/userReducer";

const films = [
    { id: 1, name: "Luka" },
    { id: 2, name: "Luka" },
    { id: 3, name: "Luka" },
    { id: 4, name: "Luka" }
];

function AdminPage() {
    const dispatch = useDispatch()
    // var obj = JSON.parse(sessionStorage.getItem('user'));
    const exit = () => {
        dispatch(deleteUser());
        window.location.reload();
    }

    const filmsList = films.map((film) => {
        return (<div key={film.id}><h1 className="film-name-text">{film.name}</h1> <DeleteIcon className="delete-icon" /></div>)
    })
    return (
        <div className="films-div page">
            <Button type="primary" className="add-film-btn">
             <Link to="/addfilm"><h2 className="btnText">Добавить фильм</h2></Link>
            </Button>
            <h1 className="exit-text" onClick={exit}>Выйти</h1>
            <div className="films-list-div">
                {filmsList}
            </div>
        </div >
    )
}

export default AdminPage;