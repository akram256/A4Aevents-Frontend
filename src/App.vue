<template>
  <div>
    <h1>Hello <HelloComponent name="bagenda" /></h1>
  </div>
</template>

<script>
import HelloComponent from './pages/hello/index.vue'
export default {
  components: {
    HelloComponent
  }
}
</script>

<style scoped>
h1 {
 color: red;
}
</style>
