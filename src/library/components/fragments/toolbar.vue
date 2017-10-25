<template>
  <v-toolbar fixed color="white" dense>
    <router-link :to="{ name: 'library.home', }"><img src="https://qph.ec.quoracdn.net/main-qimg-050a22aa0cf612a61608b9c0d0cb13a2.webp" alt="logo" width="50px"></router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!user.isLogged" flat exact :to="{ name: 'library.sign_in' }">Sign In</v-btn>
      <v-btn v-if="!user.isLogged" flat :to="{ name: 'library.register' }">Register</v-btn>
      <v-btn v-if="user.isLogged" flat @click="logout()">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    logout () {
      localStorage.removeItem('user')
      this.$store.dispatch('auth/updateUserDetails')
      this.$router.push({name: 'library.sign_in'})
    }
  },
  computed: {
    user () {
      return this.$store.getters['auth/getUserDetails']
    }
  }
}
</script>
