<template>
  <div class="container">    
    <NewsList
      v-bind:snippets="snippets"
    />    
  </div>
</template>

<script>
// @ is an alias to /src
import NewsList from '@/views/NewsList.vue'
export default {
  name: "Home",
  data() {
    return {
      snippets: [
        {id: 1, title: 'Новость 1', category: 'Финансы', text: 'I am a very simple car'},
        {id: 2, title: 'Новость 2', category: 'Спорт', text: 'I am good at containing small bits of information'},
        {id: 3, title: 'Новость 3', category: 'Культура', text: 'I am convenient because I require little markup to use effectively.'}
      ]
    }
  },
  components: {
    NewsList
  },
};
</script>

<style>

</style>