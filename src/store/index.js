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
    updateNews(state, newItem) {
      state.news.unshift(newItem)
      localStorage.setItem('news', JSON.stringify(state.news))
    },
  },
  actions: {
    createNews(ctx, newNews) {
      ctx.commit('updateNews', newNews)
    },    
  },
  modules: {
  }
})
