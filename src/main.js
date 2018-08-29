import Vue from 'vue'
import App from './App.vue'
import router from './router'  //此处的命名必须为router,不然报TypeError: Cannot read property 'matched' of undefined"


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');