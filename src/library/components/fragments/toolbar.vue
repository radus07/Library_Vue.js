<template>
  <v-toolbar fixed color="white" dense>
    <router-link :to="{ name: 'library.home', }"><img src="https://qph.ec.quoracdn.net/main-qimg-050a22aa0cf612a61608b9c0d0cb13a2.webp" alt="logo" width="50px"></router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat exact :to="{ name: 'library.sign_in' }">Sign In</v-btn>
      <v-btn flat :to="{ name: 'library.register' }">Register</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: 'Toolbar'
}
</script>

