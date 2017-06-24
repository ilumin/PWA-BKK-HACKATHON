<template>
  <div class="hello">
    <h1>Signup succeeded</h1>
    <button @click="logOut">Log out</button>
    <hr>
    <img :src="photo" style="height: 120px"> <br>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{userId}}</p>
    <hr>
    <pre>{{user}}</pre>
  </div>
</template>

<script>
import firebase from 'firebase'
import { getUser, authService } from '@/utils/FirebaseApp'

export default {
  name: 'hello',
  methods: {
    logOut () {
      firebase.auth().signOut()
    }
  },
  data () {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {}
    }
  },
  mounted () {
    let vm = this
    console.log('getUser:', getUser())
    console.log('getUser:', authService.isLoggedIn())
    firebase.auth().onAuthStateChanged((user) => {
      console.log('mounted')
      if (user) {
        vm.name = user.displayName
        vm.email = user.email
        vm.photo = user.photoURL
        vm.userId = user.uid
        vm.user = user
      } else {
        console.error('no permission')
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
