<template>
  <div>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'web.home', }">Home</router-link></li>
        <li><router-link :to="{ name: 'web.login', }">Login</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Web'
}
</script>
