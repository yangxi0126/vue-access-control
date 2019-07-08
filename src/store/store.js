import Vue from 'vue';
import Vuex from 'vuex';

import loginStore from './modules/login.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    loginStore
  }
});

export default store;
