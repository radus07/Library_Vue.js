<template>
  <section>
    <v-container grid-list-xs>
      <v-layout>
        <v-flex xs12>
          <div>
            <p>{{ msg }}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Home page'
    }
  }
}
</script>