<template>
  <div id="app">
    <Navbar />
    <main class="app-content">
      <div class="app-page">
        <router-view/>
      </div>
    </main>    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
</style>
