import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import DemoOnePage from "./DemoOnePage";
import IndexPage from "./IndexPage";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/demo1" component={DemoOnePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
