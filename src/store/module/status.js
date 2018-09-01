const state = {
    isLogin:false
}

const getters = {
    isLogin: state => state.isLogin
}

const mutations = {
    setUserStatus(state, user){
        if(user){
            state.currentUser = user;
            state.isLogin = true;
        } else {
            state.currentUser = null;
            state.isLogin = false;
        }
    }
}

const actions = {
    setLoginUser({commit},user){
        commit("setUserStatus",user)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
