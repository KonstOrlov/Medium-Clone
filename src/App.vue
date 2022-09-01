<template>
  <div>
    <mcv-topbar/>
    <router-view/>
  </div>
</template>

<script>
import McvTopbar from '@/components/Topbar';
import {actionTypes} from "@/store/Modules/auth";

export default {
  name: 'McvApp',
  components: {
    McvTopbar
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
}
</script>