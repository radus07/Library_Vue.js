<template>
  <div>
    <v-alert class="register-error" color="error" icon="error" value="true" v-if="hasErrors">
      An error occurred. Please check again.
    </v-alert>
    <v-card>
      <v-card-title style="background-color: #f5f5f5; color: rgba(0,0,0,.54)" primary-title>
        <h3 class="headline mb-0">Register</h3>
      </v-card-title>
      <v-card-actions>
        <form @submit.prevent="submit()">
          <v-container grid-list-xs>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="user.firstName"
                  label="First name*"
                  :error-messages="errors.collect('First name')"
                  v-validate="'max:25'"
                  data-vv-name="First name"
                  maxlength="25"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="user.lastName"
                  label="Last name*"
                  :error-messages="errors.collect('Last name')"
                  v-validate="'max:25'"
                  data-vv-name="Last name"
                  maxlength="25"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="user.username"
                  label="Username*"
                  :error-messages="errors.collect('Username')"
                  v-validate="'required|max:15'"
                  data-vv-name="Username"
                  maxlength="15"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="user.email"
                  label="E-mail*"
                  :error-messages="errors.collect('Email')"
                  v-validate="'required|email'"
                  data-vv-name="Email"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="user.password"
                  label="Password*"
                  :type="'password'"
                  :error-messages="errors.collect('Password')"
                  v-validate="'required'"
                  data-vv-name="Password"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="user.confirmedPassword"
                  label="Confirm password*"
                  :type="'password'"
                  :error-messages="errors.collect('Confirm password')"
                  v-validate="'required|confirmed:password'"
                  data-vv-name="Confirm password"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :type="'submit'" color="primary">register</v-btn>
            </v-card-actions>
          </v-container>
        </form>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  import {registrationService, authService} from '@/api'

  export default {
    name: 'registration-form',
    data () {
      return {
        user: {
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          confirmedPassword: ''
        },
        hasErrors: false
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll()
          .then(() => {
            if (this.$validator.errors.items.length === 0) {
              registrationService.registerUser(this.user)
                .then(() => {
                  let user = {id: 2, username: this.user.username}
                  authService.loginUser(user)
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
    }
  }
</script>

<style lang="scss" scoped>
  .register-error {
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
</style>
