import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Secret from "./components/Secret";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/products",
        component: Products,
        exact: true,
    },
    // {
    //     path: "/contact",
    //     component: Contact,
    //     exact: true,
    // },
    // {
    //     path: "/secret",
    //     component: Secret,
    //     exact: true,
    // },
];
