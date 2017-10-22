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
import { myUserService } from '../../../service/myUser.service'
import authService from '../../../service/authentication.service'
import { EventBus } from '../../temp'

export default {
  name: 'Toolbar',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    setUser () {
      myUserService.getUser()
        .then((response) => {
          this.user = response
        })
    },
    logout () {
      authService.logoutUser()
      this.setUser()
      this.$router.push({name: 'library.sign_in'})
    }
  },
  created () {
    this.setUser()
  },
  mounted () {
    EventBus.$on('login', () => {
      this.setUser()
    })
  }
}
</script>
