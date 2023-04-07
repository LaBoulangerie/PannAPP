import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { fetchFromAPI } from '../utils/fetchApi'

export const useGlobal = defineStore('useGlobal', {
  state: () => ({
    items: null,
    category: 'town',
    loading: true,
    searchQuery: null
  }),

  actions: {
    changeCat(cat) {
      this.items = null
      this.category = cat
      this.items = []
    },

    async getCat() {
      this.items = []
      this.loading = true
      await fetchFromAPI(this.category).then((data) =>
        data.forEach((item) => {
          this.items.push(item)
        })
      )
      this.loading = false
      return this.items
    },

    async searchFromApi(category, name) {
      const url = category + '/' + name
      this.items = null
      this.items = []
      await fetchFromAPI(url).then((data) => this.items.push(data))
      this.loading = false
      return this.items
    },
    async search(param) {
      const url = 'search/' + param

      this.items = null
      this.items = []
      await fetchFromAPI(url).then((data) => (this.items = data))
      this.loading = false
      this.category = this.items[0].type
      return this.items
    }
  }
})
