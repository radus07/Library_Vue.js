<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-list subheader>
        <v-subheader>Most viewed</v-subheader>
      </v-list>
      <v-flex xs12 sm3 md2 v-for="book in 6" v-bind:key="book.id">
        <v-card>
          <v-card-media :src="book.image" height="80px">
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
          <v-card-actions class="pt-0">
            <v-btn flat :to="{ name: 'library.book', params: { id: book.id }}">view</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap>
      <v-list subheader>
        <v-subheader>Newest</v-subheader>
      </v-list>
      <v-flex xs12 sm3 md2 v-for="book in 3" v-bind:key="book.id">
        <v-card>
          <v-card-media :src="book.image" height="80px">
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
          <v-card-actions class="pt-0">
            <v-btn flat :to="{ name: 'library.book', params: { id: book.id }}">view</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap>
      <v-list subheader>
        <v-subheader>Oldest</v-subheader>
      </v-list>
      <v-flex xs12 sm3 md2 v-for="book in 3" v-bind:key="book.id">
        <v-card>
          <v-card-media :src="book.image" height="80px">
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
          <v-card-actions class="pt-0">
            <v-btn flat :to="{ name: 'library.book', params: { id: book.id }}">view</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap>
      <v-list subheader>
        <v-subheader>Romanian</v-subheader>
      </v-list>
      <v-flex xs12 sm3 md2 v-for="book in 3" v-bind:key="book.id">
        <v-card>
          <v-card-media :src="book.image" height="80px">
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
          <v-card-actions class="pt-0">
            <v-btn flat :to="{ name: 'library.book', params: { id: book.id }}">view</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'BookList',
    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .list.list--subheader {
    width: 100%;

    .subheader {
      color: black;
      padding: 0 8px;
      font-size: 17px;
    }
  }

  .divider {
    margin: 30px 0 13px;
  }

  /deep/ .btn__content:before {
    background-color: white;
  }

  .btn__content:hover .btn__content:before {
    background-color: currentColor;
  }
</style>
