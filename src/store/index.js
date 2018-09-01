import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        menuItems:{},
        currentUser:null,
        isLogin:false
    },
    getters,
    mutations,
    actions
})