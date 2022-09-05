import Vue from 'vue'
import Vuex from 'vuex'

import auth from "@/store/Modules/auth";
import feed from "@/store/Modules/feed";
import popularTags from "@/store/Modules/popularTags.js";
import article from "@/store/Modules/article.js";
import createArticle from "@/store/Modules/createArticle.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    popularTags,
    article,
    createArticle
  }
})