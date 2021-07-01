import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cinema_hall from "./Cinema Hall/Cinema_hall";
import MainPage from "./main";
import FilmPage from "./film";
import ProfilePage from "./profile";

const isAuth = !!localStorage.getItem('token');
const Routing = () => {
    if (isAuth) {
        return (
            <Router>
                <Route path="/" component={MainPage} exact />
                <Route path="/cinema_hall" component={Cinema_hall}></Route>
                <Route path="/profile" component={ProfilePage} exact />
                <Route path="/films/:id" component={FilmPage} />
            </Router>
        )
    } else {
        return (
            <Router>
                <Route path="/" component={MainPage} exact />
                <Route path="/films/:id" component={FilmPage} />
            </Router>
        )
    }
};

export default Routing;
