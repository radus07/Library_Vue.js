<template>
  <v-app>
    <toolbar></toolbar>
    <main>
      <router-view/>
    </main>
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

    main {
      height: calc(100% - 84px);
      margin-top: 48px;
      background-color: white;

      .content {
        overflow-y: auto;
        max-width: 1185px;
        margin: 0 auto;

        .container {
          max-width: 100%;
        }
      }
    }
  }
</style>
