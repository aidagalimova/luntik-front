import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Cinema_hall from "./Cinema Hall/Cinema_hall";
import MainPage from "./main";
import FilmPage from "./film";
import ProfilePage from "./profile";

const isAuth = !!localStorage.getItem('token');
const Routing = () => {
    console.log(2, isAuth);
    if (isAuth) {
        return (
            <Router>
                <Route path="/" component={MainPage} exact />
                <Route path="/cinema_hall" component={Cinema_hall}></Route>
                <Route path="/profile" component={ProfilePage} exact />
                <Route path="/films/:id" component={FilmPage} />
                <Redirect to="/" />
            </Router>
        )
    } else {
        return (
            <Router>
                <Route path="/" component={MainPage} exact />
                <Route path="/films/:id" component={FilmPage} />
                <Redirect to="/" />
            </Router>
        )
    }
};

export default Routing;
