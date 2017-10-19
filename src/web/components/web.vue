<template>
  <v-app>
    <v-toolbar fixed color="white" dense>
      <router-link :to="{ name: 'web.home', }"><img src="https://qph.ec.quoracdn.net/main-qimg-050a22aa0cf612a61608b9c0d0cb13a2.webp" alt="logo" width="50px"></router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat exact :to="{ name: 'web.login' }">Login</v-btn>
        <v-btn flat :to="{ name: 'web.register' }">Register</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view/>
    </main>
    <v-footer>
      <p>Copyright 2017</p> 
    </v-footer>
  </v-app>
</template>

<script>
import Header from './fragments/header'
export default {
  name: 'Web',
  components: {
    headers: Header
  }
}
</script>

<style lang="scss">
#app {
  background-color: white;

  main {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    margin: 48px 0 0 0;
    background-color: white;

    section {
      width: 100%;
    }
  }
}
</style>
