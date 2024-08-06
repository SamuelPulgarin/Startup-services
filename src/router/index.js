import {createWebHistory, createRouter} from "vue-router";

import HomeView from "../views/HomeView.vue";
import { ROUTE_HOME } from "./router";

const routes = [
    {
        path: "/",
        redirect: ROUTE_HOME
    },
    {
        path: ROUTE_HOME,
        name: "main.show",
        component: HomeView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;