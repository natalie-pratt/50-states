
import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'

// Routers to navigate to different components within the site
export default createRouter({
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
        }
    ]
})