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
</style>
