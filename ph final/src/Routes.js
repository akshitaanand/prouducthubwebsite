import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import terms from "./terms";
import privacy from "./privacy";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/terms" component={terms} />
                    <Route path="/privacy" component={privacy} />
                </Switch>
            </Router>
        )
    }
}