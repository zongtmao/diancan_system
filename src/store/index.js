import Vue from 'vue'
import Vuex from 'vuex'

import menus from './module/menus'
import status from './module/status'
import users from './module/users'



Vue.use(Vuex);

export const store = new Vuex.Store({

    modules:{
        menus,
        users,
        status
        
    }
})