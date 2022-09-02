<template >
  <div class="home-page">
    BANNER
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed :api-url = 'api'></mcv-feed>
        </div>
        <div class="col-md-3">POPULAR TAGS</div>
      </div>
    </div>
  </div >
</template >

<script >
// import McvFeed from "@/components/Feed.vue";

import McvFeed from "@/components/Feed.vue";
export default {
  name: 'McvGlobalFeed',
  components: {
    McvFeed
    // McvFeed,
  },
  data() {
     return {
       api: '/articles',
     }
  }
}
</script >