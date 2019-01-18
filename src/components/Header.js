import React from "react";
import {   
    Route,
    NavLink,
    HashRouter,
    Link
} from "react-router-dom";
import { connect } from "react-redux";

const Header = () => (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Casa do Código</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Início</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Produtos</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

);

const mapStateToProps = ( state ) => ( {
    
} );

export default connect( mapStateToProps )( Header );
