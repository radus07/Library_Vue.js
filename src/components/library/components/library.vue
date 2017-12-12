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
  import Toolbar from './fragments/toolbar'
  import PageFooter from './fragments/page_footer'

  export default {
    name: 'Library',
    components: {
      'toolbar': Toolbar,
      'page-footer': PageFooter
    }
  }
</script>

<style lang="scss">
  #app {
    height: 100%;
    background-color: white;
    overflow-y: hidden;

    .content--wrap {
      height: calc(100% - 84px);

      .content {
        background-color: white;
        margin-top: 48px;

        .container {
          overflow-y: auto;
          height: 100%;
          max-width: 1185px;
          margin: 0 auto;
        }
      }
    }
  }
</style>
