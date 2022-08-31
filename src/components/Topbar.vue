<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link :to="{name: 'home'}" class="navbar-brand" >
        MediumClone
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link :to="{name: 'home'}" class="nav-link" exact active-class="active">
            Home
          </router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link :to="{name: 'createArticle'}" class="nav-link" active-class="active">
              <i class="ion-compose"></i> &nbsp; New Article
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'settings'}" class="nav-link" active-class="active">
              <i class="ion-compose"></i> &nbsp; Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'userProfile', params: {slug: currentUser.username}}" class="nav-link">
              <img :src="currentUser.image" alt="" class="user-pic"/>
              &nbsp; {{ currentUser.username }}
            </router-link>
          </li>
        </template>
        <template v-if="!isLoggedIn">
          <li class="nav-item">
            <router-link :to="{name: 'login'}" class="nav-link" active-class="active">
              Sign In
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'register'}" class="nav-link" active-class="active">
              Sign Up
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: 'McvTopbar',
  computed: {
    ...mapState({
      currentUser: state => state.auth.currentUser,
      isLoggedIn: state => state.auth.isLoggedIn,
    }),
  }
}
</script>