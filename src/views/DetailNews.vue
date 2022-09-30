<template>
  <div class="container">
  <div class="row">
    <div class="col s12">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{snippet.title}}</span>
          <h5>{{snippet.category}}</h5>
          <p>{{snippet.message}}</p>
        </div>
        <div class="card-action">
          
        </div>
      </div>
    </div>
  </div>
</div>
</template>
  
<script>
import { mapActions } from "vuex";
export default {
  name: "detail",
  components: {},
  data: () => ({
    snippet: {},
  }),
  async mounted() {
    this.snippet = await this.getNewsByID(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getNewsByID"]),
  },
};
</script>
  
  <style scoped>
.material-table {
  padding: 0;
}
</style>
  