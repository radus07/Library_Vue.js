<template>
  <v-container grid-list-xs fill-height>
    <unauthorized-user></unauthorized-user>
    <v-layout row wrap align-center>
      <v-flex xs12 sm4 offset-sm4>
        <v-alert class="login-error" color="error" icon="error" value="true" v-if="hasErrors">
          Invalid username or password
        </v-alert>
        <v-card>
          <v-card-title style="background-color: #f5f5f5; color: rgba(0,0,0,.54)" primary-title>
            <h3 class="headline mb-0">Sign in</h3>
          </v-card-title>
          <v-card-actions>
            <form @submit.prevent="submit()">
              <v-container grid-list-xs>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field
                      label="Username*"
                      v-model="user.username"
                      :error-messages="errors.collect('Username')"
                      v-validate="'required|max:15'"
                      data-vv-name="Username"
                      maxlength="15"
                      prepend-icon="person"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      label="Password*"
                      v-model="user.password"
                      :error-messages="errors.collect('Password')"
                      v-validate="'required'"
                      data-vv-name="Password"
                      :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                      :append-icon-cb="() => showPassword = !showPassword"
                      :type="showPassword ? 'text' : 'password'"
                      prepend-icon="lock"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-card-actions>
                  <v-btn @click="" flat class="forgot-password-link">Forgot password?</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn :type="'submit'" color="primary">Sign in</v-btn>
                </v-card-actions>
              </v-container>
            </form>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { authService } from '@/api'
  import UnauthorizedUser from '@/components/common/UnauthorizedUser'

  export default {
    name: 'sign-in',
    data () {
      return {
        user: {username: '', password: ''},
        showPassword: false,
        hasErrors: false
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll()
          .then(() => {
            if (this.$validator.errors.items.length === 0) {
              authService.checkAuthentication(this.user)
                .then((response) => {
                  authService.loginUser(response)
                    .then(() => {
                      this.$store.commit('auth/setUser')
                      this.$router.push({name: 'library.home'})
                    })
                })
                .catch(() => {
                  this.hasErrors = true
                })
            }
          })
      }
    },
    components: {
      UnauthorizedUser
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    min-height: 404px;

    .login-error {
      margin-top: -64px;
      .alert__icon.icon, .alert__dismissible .icon {
        color: white
      }
    }

    ul.list {
      background-color: red;
      li .list__tile__title {
        color: white;
      }
    }

    .forgot-password-link {
      text-transform: inherit;
    }
  }
</style>
