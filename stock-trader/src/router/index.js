import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home')
const Actions = () => import('../views/Actions')
const Portfolio = () => import('../views/Portfolio')

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'actions',
        path: '/actions',
        component: Actions
    },
    {
        name: 'portfolio',
        path: '/portfolio',
        component: Portfolio
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router