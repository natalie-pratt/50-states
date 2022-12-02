
import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import StatesVisited from '@/components/StatesVisited'
import NotFound from '@/components/NotFound'

// Routers to navigate to different components within the site
export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        {
            // StateList page or home page
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            // About site page
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {   
            // Map of selected state
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            // List of all visited states
            path: '/visited',
            name: 'StatesVisited',
            component: StatesVisited
        },
        {
            // 404 - Not Found page
            path: "/:catchAll(.*)",
            name: 'NotFound',
            component: NotFound
        }
    ]
})