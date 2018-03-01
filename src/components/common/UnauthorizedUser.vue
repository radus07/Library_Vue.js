<template>
  <div class="unauthorized-snack-bar" v-if="unauthorized.isUnauthorized">
    <v-snackbar
      :timeout="60000000"
      :color="'error'"
      v-model="showUnauthorizedSnack"
    >
      <v-layout column>
        <v-flex>
          Attempt to access: <i><u>`localhost:8080{{unauthorized.path}}`</u></i>.
        </v-flex>
        <v-flex>
          Unauthorized!
        </v-flex>
      </v-layout>
      <v-layout column>
        <v-flex>
          <v-btn dark flat @click="setUnauthorized(false)">Close</v-btn>
        </v-flex>
      </v-layout>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    name: 'unauthorized-user',
    data () {
      return {
        showUnauthorizedSnack: true
      }
    },
    computed: {
      unauthorized () {
        setTimeout(() => {
          this.$store.dispatch('auth/setUnauthorized', {isUnauthorized: false})
        }, 60000000)
        return this.$store.getters['auth/getUnauthorized']
      }
    },
    methods: {
      setUnauthorized (value) {
        this.$store.dispatch('auth/setUnauthorized', {unauthorized: value})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .unauthorized-snack-bar {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    position: fixed;
    background-color: rgba(0,0,0,0.77);

    /deep/ .snack {
      display: initial;
      max-width: 500px;
      top: calc(50% - 24px);

      .snack__content {
        height: auto;

        .layout:last-child {
          margin-bottom: auto;
        }
      }
    }
  }
</style>
