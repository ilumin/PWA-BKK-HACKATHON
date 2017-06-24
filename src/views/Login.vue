<template>
  <div class="view login">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
// import { config } from '@/firebase.config'

export default {
  name: 'login',
  components: {
  },
  mounted () {
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    }
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style>
.login {
  position: absolute;
  top: 45%; left: 0; right: 0;
  text-align: center;
}
</style>
