<template>
  <v-toolbar fixed color="white" dense>
    <router-link :to="{ name: 'library.home', }"><img src="https://qph.ec.quoracdn.net/main-qimg-050a22aa0cf612a61608b9c0d0cb13a2.webp" alt="logo" width="50px"></router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!user.isLogged">
      <v-btn flat exact :to="{ name: 'library.sign_in' }">Sign In</v-btn>
      <v-btn flat :to="{ name: 'library.register' }">Register</v-btn>
    </v-toolbar-items>
    <v-menu offset-y v-if="user.isLogged">
      <v-btn fab dark small color="primary" slot="activator">U</v-btn>
      <v-card class="toolbar-user-menu">
        <v-card-title primary-title>
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <!-- Display user's image -->
                <v-icon>face</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{user.details.name}}</v-list-tile-title>
                <v-list-tile-sub-title>{{user.details.email}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="toolbar-user-action-btn">My Account</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat @click="logout()" class="toolbar-user-action-btn">Sign out</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
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

<style lang="scss" scoped>
.toolbar-user-action-btn {
  text-transform: none!important;
}
</style>
