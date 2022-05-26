export const state = () => ({
  activeUser:0,
});

export const mutations = {
  //SET ACTIVE USER
  setActiveUser(state, payload){
    let user;
    state.status=[]
    if(state.auth.user.station[0] == 'ipah1'){
      user = 0
    }else if (state.auth.user.station[0] == 'ipah2'){
      user =1

    }else if (state.auth.user.station[0] == 'tkpmPagoh'){
      user =2

    }else{
      user =3
    }
    state.activeUser = user
  },
};

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
    // return {username:"ali"}
  },

}