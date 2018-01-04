<template>
  <v-app>
    <toolbar></toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <page-footer></page-footer>
  </v-app>
</template>

<script>
  import Toolbar from './fragments/toolbar/toolbar'
  import PageFooter from './fragments/footer/page_footer'

  export default {
    name: 'Library',
    components: {
      Toolbar,
      PageFooter
    }
  }
</script>

<style lang="scss">
  #app {
    height: 100%;
    background-color: #ffffff;
    overflow-y: hidden;

    .content--wrap {
      height: calc(100% - 84px);

      .content {
        margin-top: 48px;
        overflow-y: auto;

        .container {
          max-width: 1185px;
          margin: 0 auto;
        }
      }
    }
  }
</style>
