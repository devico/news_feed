import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: JSON.parse(localStorage.getItem('news') || '[]'),    
  },
  getters: {
    allNews(state) {
      return state.news
    }
  },
  mutations: {    
    addNews(state, newItem) {
      state.news.unshift(newItem)
      localStorage.setItem('news', JSON.stringify(state.news))
    },
    updateNews(state, item) {
      let newsIndex = state.news.findIndex((i => i.id == item.id));
      state.news[newsIndex].title = item.title
      state.news[newsIndex].category = item.category
      state.news[newsIndex].message = item.message      
      localStorage.setItem('news', JSON.stringify(state.news))
    },
  },
  actions: {
    createNews(ctx, newNews) {
      ctx.commit('addNews', newNews)
    },
    editNews(ctx, news) {
      ctx.commit('updateNews', news)
    },

    getNewsByID(ctx, id) {
      return ctx.state.news.filter(i => i.id == id)[0];      
    },
  },
  modules: {
  }
})
