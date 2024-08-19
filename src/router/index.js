import {createWebHistory, createRouter} from "vue-router";

import HomeView from "../views/HomeView.vue";
import { ROUTE_FEATURES, ROUTE_HOME, ROUTE_PRICING } from "./router";

const routes = [
    {
        path: "/",
        redirect: ROUTE_HOME
    },
    {
        path: ROUTE_HOME,
        name: "main.show",
        component: HomeView,
    },
    {
        path: ROUTE_FEATURES,
        name: "features.show",
        component: () => import("../views/FeaturesView.vue")
    },
    {
        path: ROUTE_PRICING,
        name: "pricing.show",
        component: () => import("../views/PricingView.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;