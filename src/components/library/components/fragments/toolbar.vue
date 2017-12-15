<template>
  <v-toolbar fixed color="white" dense>
    <router-link :to="{ name: 'library.home', }"><img src="https://qph.ec.quoracdn.net/main-qimg-050a22aa0cf612a61608b9c0d0cb13a2.webp" alt="logo" width="50px"></router-link>
    <v-spacer class="search-input-spacer-before"></v-spacer>
    <v-text-field class="search-input" solo clearable prepend-icon="search" label="Search"></v-text-field>
    <v-spacer class="search-input-spacer-after"></v-spacer>
    <!-- Display when size is less than 960px -->
    <v-menu class="hidden-md-and-up">
      <v-btn icon slot="activator">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile :to="{ name: 'library.books' }">
          <v-list-tile-title>Books</v-list-tile-title>
        </v-list-tile>
        <v-list-tile :to="{ name: 'library.sign_in' }" v-if="!user.isLogged">
          <v-list-tile-title>Sign in</v-list-tile-title>
        </v-list-tile>
        <v-list-tile :to="{ name: 'library.register' }" v-if="!user.isLogged">
          <v-list-tile-title>Register</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="" v-if="user.isLogged">
          <v-list-tile-title>My Account</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="logout()" v-if="user.isLogged">
          <v-list-tile-title>Sign out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <!-- Display when size is higher than 960px -->
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{ name: 'library.books' }">Books</v-btn>
      <v-btn flat :to="{ name: 'library.sign_in' }" v-if="!user.isLogged">Sign In</v-btn>
      <v-btn flat :to="{ name: 'library.register' }" v-if="!user.isLogged">Register</v-btn>
    </v-toolbar-items>
    <v-menu offset-y v-if="user.isLogged" class="hidden-sm-and-down">
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
    text-transform: none !important;
  }

  .search-input-spacer-before {
    flex-grow: 0.06!important;
  }

  .search-input-spacer-after {
    flex-grow: 0.5!important;
  }

  .search-input {
    box-shadow: 0 0 2px 1px rgb(255, 255, 255);
    background-color: #e8e8e8;

    min-height: 32px;
    height: 32px;
    max-width: 800px!important;
    width: 800px!important;

    /deep/ label {
      top: 2px!important;
    }
  }

  .search-input.input-group--focused {
    background-color: white;
    box-shadow: 0 1px 2px 1px rgb(203, 203, 203);
  }
</style>
