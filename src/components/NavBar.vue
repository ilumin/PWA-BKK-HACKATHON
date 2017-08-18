<template>
  <div id="my-navbar">
    <b-navbar toggleable type="light" variant="info" toggle-breakpoint="md" sticky="true" fixed="bottom">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand href="#">
        <img id="" src="/static/img/icons/TripPlanner.png">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item href="#/my-trip">My Trip</b-nav-item>
          <b-nav-item @click="logOut()" href="#">Log Out</b-nav-item>
        </b-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
      logOut() {
        console.log("in logout")
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
          window.location.reload()
        }, function(error) {
          // An error happened.
        });
      }
  }
}
</script>

<style>
  #my-navbar {
    position: absolute;
    width: 100%;
    right: 0;
    top: 0;
    z-index: 999;
  }
  b-navbar-brand img {
    height: 36px;
  }
  b-nav-item {
    color: white;
  }
</style>
