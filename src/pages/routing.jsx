import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Cinema_hall from "./Cinema Hall/Cinema_hall";
import MainPage from "./main";

const Routing = () => (
    <Router>
        <Route path="/" component={MainPage} exact/>
        <Route path="/cinema_hall" component={Cinema_hall}></Route>
    </Router>
);

export default Routing;
