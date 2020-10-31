import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";
const App = () => {
    return (
        <> 
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;

