<template lang="pug">
  div.layout
    HeaderLeft
    HeaderCenter
    HeaderRight
</template>

<script>
  import HeaderLeft from '../components/HeaderLeft.vue'
  import HeaderCenter from '../components/HeaderCenter.vue'
  import HeaderRight from '../components/HeaderRight.vue'
  export default {
    components: {
      HeaderLeft,
      HeaderCenter,
      HeaderRight,
    }
  }
</script>

<style>
  @import '../assets/style/brand.css';
  @import '../assets/style/global.css';
  @import '../assets/style/header.css';
  @import '../assets/style/layout.css';
  @import '../assets/style/search.css';
  @import '../assets/style/sidebar-menu.css';
  @import '../assets/style/title-bar.css';
  @import '../assets/style/trends-for-you.css';
  @import '../assets/style/tweet.css';
  @import '../assets/style/who-to-follow.css';
  @import '../assets/style/write-tweet.css';
</style>
