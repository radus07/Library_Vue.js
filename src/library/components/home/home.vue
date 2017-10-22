<template>
  <v-content>
    <v-container grid-list-lg>
      <v-layout wrap>
        <v-flex xs3 v-for="card in 7" v-bind:key="card">
          <v-card>
            <v-card-media src="https://qph.ec.quoracdn.net/main-qimg-050a22aa0cf612a61608b9c0d0cb13a2.webp" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
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
import { myUserService } from '../../../service/myUser.service'

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
  created () {
    this.setUser()
  }
}
</script>