<template>
  <v-container grid-list-xs fill-height>
    <v-layout row wrap align-center>
      <v-flex xs12 sm4 offset-sm4>
        <registration-form></registration-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import RegistrationForm from './fragments/Form'

  export default {
    name: 'register',
    components: {
      RegistrationForm
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    min-height: 637px;
  }
</style>
