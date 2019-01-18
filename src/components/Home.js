import React from "react";
import Helmet from "react-helmet"

const Home = () => (
    <div>
        <Helmet>
            <title>Página inicial - Casa do código</title>
            <meta name="description" content="Página inicial da casa do código" />
        </Helmet>
        <h1>Página inicial</h1>
    </div>
);

export default Home;