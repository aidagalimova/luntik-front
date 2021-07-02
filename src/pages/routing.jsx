import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Cinema_hall from "./Cinema Hall/Cinema_hall";
import MainPage from "./main";
import FilmPage from "./film";
import ProfilePage from "./profile";
import AdminPage from "./admin";
import AddFilmPage from "./add-film";
import { useSelector } from "react-redux";


const isAuth = !!localStorage.getItem('token');
const Routing = () => {
    if (isAuth) {
        const isAdmin = JSON.parse(sessionStorage.getItem('user')).isAdmin;
        if (!isAdmin) {
            return (
                <Router>
                    <Switch>
                        <Route path="/" component={MainPage} exact />
                        <Route path="/cinema_hall" component={Cinema_hall}></Route>
                        <Route path="/profile" component={ProfilePage} exact />
                        <Route path="/films/:id" component={FilmPage} />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            )
        } else {
            return (
                <Router>
                    <Switch>
                        <Route path="/" component={MainPage} exact />
                        <Route path="/cinema_hall" component={Cinema_hall}></Route>
                        <Route path="/profile" component={AdminPage} exact />
                        <Route path="/films/:id" component={FilmPage} />
                        <Route path="/addfilm" component={AddFilmPage} exact />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            )
        }
    } else {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/films/:id" component={FilmPage} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
};

export default Routing;
