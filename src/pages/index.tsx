import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import DemoOne from "./demo-one";

const IndexPage: React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/demo1" render={() =>
                    <DemoOne />
                } />
            </Switch>
        </HashRouter>
    )
}

export default IndexPage;