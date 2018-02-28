<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm4 md3 v-for="book in 18" v-bind:key="book.id">
        <v-card>
          <v-card-media :src="book.image" height="180px">
          </v-card-media>
          <v-list two-line class="pb-0">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title v-html="book.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="'by ' + book.author + ', ' + book.editionYear"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-card-text class="pt-0 pb-0">
            <div>
              <p v-html="book.content"></p>
            </div>
          </v-card-text>
          <div class="pt-0 text-xs-center text-sm-center text-md-center text-lg-center text-xl-center">
            <v-btn round color="primary" dark>view</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {bookService} from '../../../api/index'

  export default {
    name: 'Home',
    computed: {
      books () {
        // return bookService.getBooks()
        return bookService.getBooksByTitle('Eminescu')
      }
    }
  }
</script>
