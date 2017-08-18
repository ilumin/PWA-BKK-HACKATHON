<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
    background-image: linear-gradient(#8b9da9, #fff6e4);
    background-attachment: fixed;
    /*box-shadow: inset 0 0 100px hsla(0,0%,0%,.3);*/
    min-height: 100%;
}
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100%;
}
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100%;
}
.container {
  height: 100%;
  min-height: 100%;
}
.card-title { color: #FFF; text-shadow: 0 0 .5em rgba(0,0,0,.8) }
.page-header {
  text-align: center;
  padding: 10px 0;
  margin-bottom: 10px;
}
</style>
