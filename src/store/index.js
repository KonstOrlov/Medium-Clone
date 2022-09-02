import Vue from 'vue'
import Vuex from 'vuex'

import auth from "@/store/Modules/auth.js";
import feed from "@/store/Modules/feed.js";

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