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
  background-color: white;

  main {
    margin-top: 48px;
    background-color: white;
  }
}
</style>

<style lang="scss">
  .content {
    max-width: 1185px;
    margin: 0 auto;

    .container {
      max-width: 100%;
    }
  }
</style>

