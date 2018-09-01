const state = {
    currentUser:null
}

const getters = {
    currentUser: state => state.currentUser
}

const mutations = {
    setUserStatus(state, user){
        if(user){
            console.log(state);
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
    