import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import routes from "../routes";

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to React Universal App!",
        };
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <Switch>
                        { routes.map( route => <Route key={ route.path } { ...route } /> ) }
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Layout;
