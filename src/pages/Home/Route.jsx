import { Route } from "react-router-dom";
import Home from './Home'
import HomePage from "./components/HomePage";
import LazyLoad from "@comp/LazyLoading/LazyLoad";

export default (
    <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
        <Route
            path="/categories"
            element={LazyLoad(() => import("@/pages/Home/components/Categories/Category"))()}
        />
        <Route
            path="/categories/:id"
            element={LazyLoad(() => import("@/pages/Home/components/Products/Product"))()}
        />
        <Route path="/products/:id"
            element={LazyLoad(() => import("@/pages/Home/components/ProductItems/ProductItem"))()} 
        />

        <Route path="/cart"
            element={LazyLoad(() => import("@/pages/Cart"))()}
        />
        
    </Route>
);
