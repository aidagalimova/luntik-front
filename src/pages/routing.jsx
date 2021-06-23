import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from "./main";

const Routing = () => (
    <Router>
        <Route path="/" component={MainPage} exact/>
    </Router>
);

export default Routing;
