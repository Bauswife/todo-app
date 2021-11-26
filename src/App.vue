<template>
  <div id="app">
    <IconHandler v-show="false"/>
    <router-view></router-view>
  </div>
</template>

<script>

import IconHandler from './assets/IconHandler.vue'
export default {
  components: { IconHandler },
  name: 'App',
}
</script>

<style>
  body, html {
    margin: 0px;
    background-color: #fafafa;
    height: 100%;
  }
  #app {
    height: 100%;
  }
  @import './assets/GlobalStyle.css';
</style>
