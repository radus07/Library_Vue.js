<template>
  <v-content>
    <v-container grid-list-xs>
      <v-layout>
        <v-flex xs12>
          <div>
            <p>{{ user }}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import myUserService from '../../../service/myUser.service'
import { EventBus } from '../../temp'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Home page',
      user: {}
    }
  },
  methods: {
    setUser () {
      myUserService.getUser()
        .then((response) => {
          this.user = response
        })
    }
  },
  mounted () {
    EventBus.$on('logout', () => {
      this.setUser()
    })
  },
  created () {
    this.setUser()
  }
}
</script>