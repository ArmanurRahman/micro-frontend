import React from "react";
import ReactDOM from "react-dom";

import { Router, Switch, Route } from "react-router-dom";
import {
    StylesProvider,
    createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
});

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path='/pricing' exact component={Pricing} />
                        <Route path='/' component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};
