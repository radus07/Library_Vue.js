<template>
  <div>
    <headers></headers>
    <router-view/>
  </div>
</template>
<script>
import Header from './fragments/header'

export default {
  name: 'Web',
  components: {
    'headers': Header
  }
}
</script>