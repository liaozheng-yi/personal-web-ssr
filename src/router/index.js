import {
    createMemoryHistory,
    createRouter as _createRouter,
    createWebHistory
} from 'vue-router'

/**
// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('../pages/*.vue')
 const routes = Object.keys(pages).map((path) => {
     const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
     return {
         path: name === '/home' ? '/' : name,
         component: pages[path]  // ()=>import('./pages/*.vue')
        }
    })
*/

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/',
        component: () => import("../layout/base.vue"),
        children: [
            {
                path: '/home',
                component: () => import('../pages/Home.vue')
            },
            {
                path: '/about',
                component: () => import('../pages/About.vue')
            },
        ]
    },
    {
        path: '/:catchAll(.*)*',
        name: '404',
        component: () => import('../pages/404.vue'),
        meta: {
            title: '404 Not Found',
        },
    }
]

export function createRouter() {
    return _createRouter({
        // use appropriate history implementation for server/client
        // import.meta.env.SSR is injected by Vite.
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes
    })
}