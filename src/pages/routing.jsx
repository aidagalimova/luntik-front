import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./main";
import ProfilePage from "./profile";

const Routing = () => (
    <Router>
        <Route path="/" component={MainPage} exact />
        <Route path="/profile" component={ProfilePage} exact />
    </Router>
);

export default Routing;
