import Vue from 'vue'
import Vuex from 'vuex'

import auth from "@/store/Modules/auth";
import feed from "@/store/Modules/feed";
import popularTags from "@/store/Modules/popularTags.js";
import article from "@/store/Modules/article.js";
import createArticle from "@/store/Modules/createArticle.js";
import editArticle from "@/store/Modules/editArticle.js";
import settings from "@/store/Modules/settings.js";
import addToFavorites from "@/store/Modules/addToFavorites.js";
import userProfile from "@/store/Modules/userProfile.js";

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
    createArticle,
    editArticle,
    settings,
    addToFavorites,
    userProfile
  }
})