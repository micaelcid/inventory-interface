import Home from "./components/Home"
import Products from "./components/Products"

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
    }
];
