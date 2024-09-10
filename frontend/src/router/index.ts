import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import AboutView from "@/views/AboutView.vue"
import TimelineView from "@/views/TimelineView.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "app",
        component: TimelineView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AboutView,
    },
    // {
    //     path: "/search"
    //     name: "search",
    //     component: SearchView,
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
