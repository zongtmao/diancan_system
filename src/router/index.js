import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import Abort from '../components/abort/Abort'
import Login from '../components/Login'
import Register from '../components/Register'

// 二级路由
import History from '../components/abort/History.vue'
import Contant from '../components/abort/Contant.vue'
import Delivery from '../components/abort/Delivery.vue'
import OriderGuider from '../components/abort/OrderGuider.vue'

// 三级路由
import Phone from '../components/abort/contact/Phone.vue'
import PhoneName from '../components/abort/contact/PhoneName.vue'

Vue.use(Router)

export default new Router({
    routes:[
        { path: '/', name: 'homeLink', component: Home },
        { path: '/menu', name: 'menuLink', component: Menu },
        { path: '/admin', name: 'adminLink', component: Admin },
        {
            path: '/abort',
            name: 'abortLink',
            component: Abort,
            redirect: '/abort/contant',
            children: [
                { path: '/abort/history', name: 'historyLink', component: History },
                {
                    path: '/abort/contant',
                    name: 'contantLink',
                    component: Contant,
                    redirect: '/phonename',
                    children: [
                        { path: '/phone', name: 'phoneLink', component: Phone },
                        { path: '/phonename', name: 'phonenameLink', component: PhoneName },
                    ]
                },
                { path: '/abort/delivery', name: 'deliveryLink', component: Delivery },
                { path: '/abort/oriderGuider', name: 'orderGuiderLink', component: OriderGuider },
            ]
        },
        { path: '/login', name: 'loginLink', component: Login },
        { path: '/register', name: 'rigisterLink', component: Register },
        { path: '*', redirect: '/' }
    ],
    mode:'history' //去掉URL里的#号
})