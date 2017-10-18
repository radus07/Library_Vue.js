<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'web.home', }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'web.login', }">Login</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'web.register', }">Register</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
header {

  nav {

    ul {

      li {
      }
    }
  }
}
</style>

