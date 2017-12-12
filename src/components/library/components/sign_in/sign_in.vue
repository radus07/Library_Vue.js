<template>
  <v-container grid-list-xs fill-height>
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
              <!--
                * Add more possibilities
               -->
              <v-container grid-list-xs>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field
                      label="Username*"
                      v-model="user.username"
                      :error-messages="nameErrors"
                      @input="$v.user.username.$touch()"
                      @blur="$v.user.username.$touch()"
                      prepend-icon="person"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      label="Password*"
                      v-model="user.password"
                      :error-messages="passwordErrors"
                      @input="$v.user.password.$touch()"
                      @blur="$v.user.password.$touch()"
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
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'
  import { authService } from '../../../../api'

  export default {
    name: 'SignIn',
    mixins: [validationMixin],
    validations: {
      user: {
        username: {required, maxLength: maxLength(10)},
        password: {required}
      }
    },
    data () {
      return {
        user: {},
        showPassword: false,
        hasErrors: false
      }
    },
    methods: {
      submit () {
        if (this.$v.$invalid) {
          this.$v.$touch()
        } else {
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
      }
    },
    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.user.username.$dirty) return errors
        !this.$v.user.username.maxLength && errors.push('Username must be at most 10 characters long')
        !this.$v.user.username.required && errors.push('Username is required.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.user.password.$dirty) return errors
        !this.$v.user.password.required && errors.push('Password is required')
        return errors
      }
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
