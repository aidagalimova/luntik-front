import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Cinema_hall from "./Cinema Hall/Cinema_hall";
import MainPage from "./main";
import FilmPage from "./film";
import ProfilePage from "./profile";
import AdminPage from "./admin";
import AddFilmPage from "./add-film";
const isAdmin = true;
const Routing = ({ isAuth }) => {
    if (!isAdmin) {
        return (
            <Router>
                <Route path="/" component={MainPage} exact />
                <Route path="/profile" component={ProfilePage} exact />
                <Route path="/films/:id" component={FilmPage} />
                <Route path="/cinema_hall" component={Cinema_hall}></Route>
            </Router>
        )
    } else {
        return (
            <Router>
                <Route path="/" component={MainPage} exact />
                <Route path="/profile" component={AdminPage} exact />
                <Route path="/films/:id" component={FilmPage} />
                <Route path="/addfilm" component={AddFilmPage} />
            </Router>
        )
    }
};

export default Routing;
