<template>
  <div class="container">    
    <NewsList
      v-bind:snippets="allNews"
    />    
  </div>
</template>

<script>
// @ is an alias to /src
import NewsList from '@/views/NewsList.vue'
import {mapGetters} from 'vuex'
export default {
  name: "Home",  
  components: {
    NewsList
  },
  computed: mapGetters(["allNews"])
};
</script>

<style>

</style>