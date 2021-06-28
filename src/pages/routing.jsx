import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./main";
import FilmPage from "./film";
import ProfilePage from "./profile";\
const Routing = () => (
    <Router>
        <Route path="/" component={MainPage} exact/>
        <Route path="/profile" component={ProfilePage} exact />
        <Route  path="/films/:id"  component={FilmPage}/>
    </Router>
);

export default Routing;
