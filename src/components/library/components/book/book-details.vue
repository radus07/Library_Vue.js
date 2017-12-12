<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm4 md3 v-for="book in books" v-bind:key="book.id">
        <v-card>
          <h4>Details</h4>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {bookService} from '../../../../api'

  export default {
    name: 'BookDetails',
    computed: {
      books () {
        // return bookService.getBooks()
        return bookService.getBooksByTitle('Eminescu')
      }
    }
  }
</script>
