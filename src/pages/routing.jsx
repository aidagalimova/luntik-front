import React from "react";
<<<<<<< HEAD
import {BrowserRouter as Router, Route} from "react-router-dom";
import Cinema_hall from "./Cinema Hall/Cinema_hall";
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
>>>>>>> 35f0914efe11f43cdabbe5be68748b13106ca926
import MainPage from "./main";
import FilmPage from "./film";
import ProfilePage from "./profile";
const Routing = () => (
    <Router>
        <Route path="/" component={MainPage} exact/>
<<<<<<< HEAD
        <Route path="/cinema_hall" component={Cinema_hall}></Route>
=======
        <Route path="/profile" component={ProfilePage} exact />
        <Route  path="/films/:id"  component={FilmPage}/>
>>>>>>> 35f0914efe11f43cdabbe5be68748b13106ca926
    </Router>
);

export default Routing;
