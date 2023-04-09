import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../view/Dashboard.vue"
import Login from "../view/Login.vue"
import RequestPassword from "../view/RequestPassword.vue"
import store from "../store"



const routes = [
    {
        path: '/app',
        name: 'app',
        component: () => import('../components/AppLayout.vue'),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
            {
                path: 'product',
                name: 'app.product',
                component: () => import('../view/Product.vue'),
            },
        ]
    },
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/request-password',
        name: 'request-password',
        component: RequestPassword
    },
    {
        path: '/reset-password/:token',
        component: () => import('../view/ResetPassword.vue')
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('../view/NotFound.vue')
    },
    {
        path: '/sidebar',
        component: () => import('../components/Sidebar.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'login' })
    } else if (to.meta.requiresGuest && store.state.user.token) {
        next({ name: 'app.dashboard' })
    } else {
        next();
    }

})
export default router;