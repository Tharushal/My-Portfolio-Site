/* eslint-disable */
import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/home-scr.vue'
import PageNotFound from './views/page-not-found-scr.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title: 'Home'
        }
    },

    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
        meta: {
            title: '404 Not Found'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    }
})

export default router;