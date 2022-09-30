<template>
    <div class="container">
      <div class="section">
        <NewsItem 
          v-for="(value, key, index) in snippets" :key="`${ key }-${ index }`"
          :snippet="value"
        />
      </div>
      <br /><br />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NewsItem from '@/components/NewsItem.vue'
  export default {
    name: "NewsList",
    props: ['snippets'],
    components: {
      NewsItem
    },
  };
  </script>
  
  <style >
  </style>