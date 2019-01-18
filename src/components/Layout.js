import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import routes from "../routes";
import Helmet from "react-helmet"
class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Bem vindo à Casa do Código",
        };
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Bem vindo ao paraíso</title>
                </Helmet>
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
