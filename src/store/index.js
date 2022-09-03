import Vue from 'vue'
import Vuex from 'vuex'

import auth from "@/store/Modules/auth";
import feed from "@/store/Modules/feed";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed
  }
})