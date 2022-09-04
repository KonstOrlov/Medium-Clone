<template >
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{article.title}}</h1>
        <div class="article-meta">
          <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
            <img :src="article.author.image" alt="Profile image" />
          </router-link>
          <div class="info">
            <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
              {{article.author.username}}
            </router-link>
            <span class="date">{{article.createdAt}}</span>
          </div>
          <span v-if="isAuthor">
            <router-link :to="{name: 'editArticle', params: {slug: article.slug}}" class="btn btn-outline-secondary btn-sm">
              <i class="ion-edit"></i>
              Edit Article
            </router-link>
            <button class="btn btn-outline-danger btn-sm" @click="deleteArticle">
              <i class="ion-trash-a" />
              Delete Article
            </button >
          </span>
        </div>
      </div>
    </div>
    <div class="container-page">
      <mcv-loading v-if="isLoading"/>
      <mcv-error-message v-if="error" :message="error" />
      <div class="row article-content" v-if="article">
        <div class="col-xs-12">
          <div>
            <p>
              {{article.body}}
            </p>
          </div>
          <mcv-tag-list :tags="article.tagList" />
        </div>
      </div>
    </div>
  </div >
</template >

<script >
import {actionTypes as articleActionTypes} from "@/store/Modules/article.js";
import {getterTypes as authGetterTypes} from "@/store/Modules/auth.js";
import {mapState, mapGetters} from "vuex";
import McvErrorMessage from "@/components/ErrorMessage.vue";
import McvLoading from "@/components/Loading.vue";
import McvTagList from "@/components/TagList.vue"

export default {
  name: 'McvArticle',
  components: {
    McvErrorMessage,
    McvLoading,
    McvTagList
  },

  mounted() {
    this.$store.dispatch(articleActionTypes.getArticle, {slug: this.$route.params.slug});
  },
  computed:{
    ...mapState({
      isLoading: state => state.article.isLoading,
      error: state => state.article.error,
      article: state => state.article.data
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    }),
    isAuthor() {
      if(!this.currentUser || !this.article) {
        return false;
      }
      return this.currentUser.username === this.article.author.username;
    }
  },
  methods: {
    deleteArticle() {
      this.$store.dispatch(articleActionTypes.deleteArticle, {
        slug: this.$route.params.slug
      }).then(() => this.$router.push({name: 'globalFeed'}))
    }
  }
}
</script >

<style scoped >

</style >