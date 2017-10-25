<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '../../node_modules/vuetify/dist/vuetify.min.css';
* {
  margin: 0;
  padding: 0;
}
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.content {
    max-width: 1185px;
    margin: 0 auto;

    .container {
      max-width: 100%;
    }
  }
</style>