<template>
  <div class="row">
    <div class="col s12">
      <div class="card card-responsive">
        <div class="card-content">
          <span class="card-title grey-text text-darken-4">{{
            snippet.title
          }}</span>
          <span class="card-subtitle grey-text text-darken-4">{{
            snippet.category
          }}</span>
          <div class="card-content short-desc">
            <p class="desc">{{ snippet.message }}</p>
          </div>
          <div >
            <button
              class="waves-effect waves-light btn-small exp-button"
              type="submit"
              name="action"
              @click="editNews(snippet.id)"
            >
              <i class="large material-icons">edit</i>
            </button>
            <button
              class="waves-effect waves-light btn-small exp-button"
              type="submit"
              name="action"
              @click="showDetail(snippet.id)"
            >
              <i class="large material-icons">more</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
// @ is an alias to /src

export default {
  props: {
    snippet: {
      type: Object,
      required: true,
    },
  },
  name: "NewsList",
  components: {},
  methods: {
    showDetail(id) {
      this.$router.push(`/detail/${id}`)
    },
    editNews(id) {
      this.$router.push(`/edit/${id}`)
    }
  }
};
</script>
  
<style>
.card-responsive {
  position: relative;
}

button {
  margin: 5px;
  opacity: 0;
  position: absolute;
  transition: opacity 0.3s;
}

.card-responsive:hover button {
  opacity: 1;
  transition: opacity 0.3s;
}

.short-desc {
  max-width: 600px;
}
.desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

</style>