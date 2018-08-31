import Vue from 'vue'
import App from './App.vue'
import router from './router' //此处的命名必须为router,不然报TypeError: Cannot read property 'matched' of undefined"
import axios from 'axios'

import { store } from './store/index.js'

axios.defaults.baseURL = 'https://wd2120267981rsvabc.wilddogio.com/'

router.beforeEach((to, from, next) => {
    next();
    //全局守卫  模拟登录
    // if(to.path == '/login' || to.path == '/register'){
    //     next();
    // } else {
    //     alert("您还没有登录，请先登录");
    //     next('/login');
    // }

});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');