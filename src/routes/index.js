import VueRouter from 'vue-router'
import auth from './middleware/auth'

import Home from '../components/Home'
import Login from '../components/Login'
import Registration from '../components/Registration'
import NotFound_404 from '../components/NotFound_404'
import Dashboard from '../components/Dashboard'
import DashboardHome from '../components/DashboardHome'
import ViewTeams from '../components/ViewTeams'
import ViewPlayers from '../components/ViewPlayers'

const routes = [
    { name:"home", path: "/", component: Home },
    { name:"login", path: "/login", component: Login },
    { name:"registration", path: "/registration", component: Registration },
    {
        path: "/dashboard",
        beforeEnter: auth,
        component: Dashboard,
        children: [
            { name:"dashboard", path: "", component: DashboardHome },
            { name:"dashboard.add.team", path: "/team/add", component: DashboardHome },
            { name:"dashboard.view.team", path: "/team", component: ViewTeams },
            { name:"dashboard.add.player", path: "/player/add", component: DashboardHome },
            { name:"dashboard.view.player", path: "/player", component: ViewPlayers },
        ]
    },



    { name:"NOT_FOUND", path:"*", component: NotFound_404}
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;