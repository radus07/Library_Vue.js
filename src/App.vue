<template>
  <v-container grid-list-md text-lg-center>
    <v-layout row wrap>
      <v-flex lg12>
        <v-card dark color="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex lg6 v-for="i in 2" :key="i">
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex lg4 v-for="i in 3" :key="i">
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex lg3 v-for="i in 4" :key="i">
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex lg2 v-for="i in 6" :key="i">
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex lg1 v-for="i in 12" :key="i">
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '../node_modules/vuetify/dist/vuetify.min.css';
* {
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
}
</style>