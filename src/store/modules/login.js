import Axios from 'axios';

const state = {
  isLogin: false,
  token: null,
  userInfo: null
};

const getters = {
  getLogin(state, getters, rootState) {
    return state.isLogin;
  },
  getUserInfo(state, getters, rootState) {
    return state.userInfo;
  },
  getToken(state, getters, rootState) {
    return state.token;
  }
};

const mutations = {
  /*设置登录状态*/
  setLoginState(state, loginState) {
    state.isLogin = loginState;
  },
  /*设置登录信息*/
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  },
  /*设置token*/
  setToken(state, token) {
    state.token = token;
  }
};

const actions = {
  /*登录*/
  Login(context, userInfo) {
    return new Promise((resolve, reject) => {
      Axios({
        method: 'get',
        url: `${window.origin}/static/json/login.json`,
        params: {
          username: userInfo.username,
          password: userInfo.password
        }
      }).then((response) => {
        if (response.data.code === 200) {
          context.commit('setLoginState', true);
          context.commit('setUserInfo', {
            username: userInfo.username,
            password: userInfo.password
          });
          context.commit('setToken', response.data.token);
          resolve();
        } else {
          reject('错误信息');
        }
      }).catch((error) => {
        reject(error);
      });
    });
  },
  /*获取用户登录信息，判断是否登录*/
  getLoginState(context) {
    return new Promise((resolve, reject) => {
      Axios({
        method: 'get',
        url: `${window.origin}/static/json/loginState.json`,
      }).then((response) => {
        if (response.meta.code === 200) {
          context.commit('setLoginState', true);
          resolve();
        } else {
          reject('错误信息');
        }
      }).catch((error) => {
        reject('错误信息');
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
