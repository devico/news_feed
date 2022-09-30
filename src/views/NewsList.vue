<template>
  <div>
    <div class="row">
      <div class="col s12 add-news">
        <router-link to="/add" class="waves-effect waves-light btn add-news"
          ><i class="material-icons left">add</i>Добавить</router-link
        >
      </div>
    </div>
    <div>
      <NewsItem
        v-for="(value, key, index) in snippets"
        :key="`${key}-${index}`"
        :snippet="value"
      />
      <br /><br />
    </div>
  </div>
</template>
  
  <script>
// @ is an alias to /src
import NewsItem from "@/components/NewsItem.vue";
export default {
  name: "NewsList",
  props: ["snippets"],
  components: {
    NewsItem,
  },
};
</script>
  
  <style >
.add-news {
  margin-top: 15px;
}
</style>