<template>
  <div>
    <div>
        <!--<my-button color="blue" @click="facebookLogin()" label="login with facebook"></my-button>-->
        <button @click="facebookLogin()">Log in</button>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue'

export default {
  name: 'login',
  components: {
    MyButton
  },
  methods: {
    facebookLogin: function () {
      const provider = new window.firebase.auth.FacebookAuthProvider()
      console.log(JSON.stringify(provider))
      window.firebase.auth().signInWithPopup(provider).then(function (result) {
        let token = result.credential.accessToken
        // The signed-in user info.
        let user = result.user
        console.log(token, JSON.stringify(token))
        console.log(user, JSON.stringify(user))
      }).catch(function (error) {
        console.log(error, JSON.stringify(error))
      })
    }
  }
}
</script>

<style>

</style>
