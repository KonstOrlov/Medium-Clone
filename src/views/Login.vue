<template>
  <div class="container page">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign In</h1>
        <p class="text-xs-center">
          <router-link to='register'>Need an account?</router-link>
        </p>
        <mcv-validation-errors v-if="validationErrors" :validation-errors = "validationErrors" />
        <form @submit.prevent="onSubmit">
          <fieldset class="form-group">
            <input type="email" class="form-control form-control-lg" placeholder="Email" v-model = "email"/>
          </fieldset>
          <fieldset class="form-group">
            <input type="password" class="form-control form-control-lg" placeholder="Password" v-model = "password"/>
          </fieldset>
          <button :disabled="isSubmitting" class="btn btn-lg btn-primary pull-xs-right">Sign In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import {actionTypes} from "@/store/Modules/auth.js";
  import McvValidationErrors from "@/components/ValidationErrors";

  export default {
    name: 'McvLogin',
    components: {McvValidationErrors},
    comments: {
      McvValidationErrors
    },
    data() {
      return {
        email: '',
        password:''
      }
    },
    computed: {
      ...mapState({
        isSubmitting: state=> state.auth.isSubmitting,
        validationErrors: state => state.auth.validationErrors
      }),
    },
    methods:{
      onSubmit() {
        this.$store
            .dispatch(actionTypes.login, {
              email: this.email,
              password: this.password
            })
            .then(() => {
              this.$router.push({name: 'globalFeed'});
            });
      }
    }
  }
</script>