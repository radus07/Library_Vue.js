<template>
  <v-content>
    <v-container grid-list-xs>
      <v-layout>
        <v-flex xs12 sm4 offset-sm4>
          <v-card>
            <v-card-title style="background-color: #f5f5f5; color: rgba(0,0,0,.54)" primary-title>
              <h3 class="headline mb-0">Register</h3>
            </v-card-title>
            <v-card-actions>
              <v-flex xl12>
                <form>
                  <v-text-field
                    v-model="user.name"
                    label="Name"
                    :counter="10"
                    :error-messages="errors.collect('Username')"
                    v-validate="'required|max:10'"
                    data-vv-name="Username"
                    maxlength="10"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="user.email"
                    label="E-mail"
                    :error-messages="errors.collect('Email')"
                    v-validate="'required|email'"
                    data-vv-name="Email"
                    required
                  ></v-text-field>
                  <v-checkbox
                    v-model="user.checkbox"
                    value="1"
                    label="Accept terms"
                    :error-messages="errors.collect('checkbox')"
                    v-validate="'required'"
                    data-vv-name="checkbox"
                    type="checkbox"
                    required
                  ></v-checkbox>
                  <v-btn @click="submit">register</v-btn>
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
export default {
  name: 'Register',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.user = {}
      this.$validator.reset()
    }
  }
}
</script>
