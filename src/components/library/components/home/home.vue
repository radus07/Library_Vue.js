<template>
  <v-content>
    <v-container grid-list-lg>
      <v-layout wrap>
        <v-flex xs3 v-for="book in books" v-bind:key="book.id">
          <v-card>
            <v-card-media src="https://qph.ec.quoracdn.net/main-qimg-050a22aa0cf612a61608b9c0d0cb13a2.webp"
                          height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{book.title}}</h3>
                <!--<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>-->
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat>Share</v-btn>
              <v-btn flat>View</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      books () {
        let books = []
        books.push({id: 1, title: 'Book 1'})
        return books
      }
    }
  }
</script>
