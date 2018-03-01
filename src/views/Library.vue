<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import AppToolbar from '@/components/common/AppToolbar'
  import AppFooter from '@/components/common/AppFooter'

  export default {
    name: 'library',
    components: {
      AppToolbar,
      AppFooter
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
