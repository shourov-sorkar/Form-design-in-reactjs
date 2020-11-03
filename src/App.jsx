import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Second from "./Second";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/second" component={Second} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;

