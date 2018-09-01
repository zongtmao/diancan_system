import Vue from 'vue'
import Vuex from 'vuex'

import menus from './module/menu'
import status from './module/status'
import users from './module/user'

// import * as getters from './getters'
// import * as actions from './actions'
// import * as mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
    // state:{
    //     menuItems:{},
    //     currentUser:null,
    //     isLogin:false
    // },
    // getters,
    // mutations,
    // actions
    modules:{
        menus,
        users,
        status
        
    }
})