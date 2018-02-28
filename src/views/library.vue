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
  import Toolbar from '../components/common/toolbar/toolbar'
  import PageFooter from '../components/common/footer/page_footer'

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

    .content {
      height: calc(100% - 84px);

      .content--wrap {
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
