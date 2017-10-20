<template>
  <v-content>
    <v-container grid-list-xs fill-height>
      <v-layout row wrap align-center>
        <v-flex xs12 sm4 offset-sm4>
          <div class="error-content" v-if="hasErrors">
            <v-list>
              <v-list-tile>
                <v-list-tile-avatar>
                  <v-icon color="white">error</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Invalid username or password</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </div>
          <v-card>
            <v-card-title style="background-color: #f5f5f5; color: rgba(0,0,0,.54)" primary-title>
              <h3 class="headline mb-0">Sign in</h3>
            </v-card-title>
            <v-card-actions>
              <v-flex xl12>
                <form @submit.prevent="submit()">
                  <v-text-field
                    label="Username*"
                    v-model="user.username"
                    :error-messages="nameErrors"
                    @input="$v.user.username.$touch()"
                    @blur="$v.user.username.$touch()"
                    prepend-icon="person"
                  ></v-text-field>
                  <v-text-field
                    label="Password*"
                    v-model="user.password"
                    :error-messages="passwordErrors"
                    @input="$v.user.password.$touch()"
                    @blur="$v.user.password.$touch()"
                    :append-icon="showPassord ? 'visibility_off' : 'visibility'"
                    :append-icon-cb="() => (showPassord = !showPassord)"
                    :type="showPassord ? 'text' : 'password'"
                    prepend-icon="lock"
                  ></v-text-field>

                  <v-btn :type="'submit'">Sign in</v-btn>
                  <v-btn @click="clear">reset</v-btn>
                </form>
              </v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
const VALID_USER = {
  username: 'user',
  password: 'user'
}
export default {
  mixins: [validationMixin],
  validations: {
    user: {
      username: { required, maxLength: maxLength(10) },
      password: { required }
    }
  },
  data () {
    return {
      user: {},
      showPassord: false,
      hasErrors: false
    }
  },
  methods: {
    submit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
      } else {
        this.checkUser()
          .then(result => {
            this.hasErrors = false
            console.log('success')
          })
          .catch(() => {
            this.hasErrors = true
            console.log('error')
          })
      }
    },
    clear () {
      this.$v.$reset()
      this.user = {}
      this.hasErrors = false
    },
    checkUser () {
      return new Promise((resolve, reject) => {
        if (this.user.username === VALID_USER.username && this.user.password === VALID_USER.password) {
          resolve(true)
        } else {
          reject(new Error('invalid username or password'))
        }
      })
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

<style lang="scss">
.error-content {
  margin-top: -64px;
  height: 64px;

  ul.list {
    background-color: red;
    li .list__tile__title {
      color: white;
    }
  }
}
</style>
