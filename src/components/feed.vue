<script setup>
import { fetchFromAPI } from '../utils/fetchApi'
import { ref, onUpdated, onMounted } from 'vue'
import { useGlobal } from '../stores/counter'
import SearchBar from './feed/searchBar.vue'
import Card from './feed/card.vue'
const global = useGlobal()
onMounted(() => {
  if (global.items == null) {
    global.getCat()
    global.getDate()
  }
})
</script>

<template>
  <div class="overflow-hidden overflow-y-scroll md:ml-40 md: h-screen">
    <SearchBar />
    <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-4 ml-4 text-orange">
      {{ global.category.toUpperCase() }}
    </h3>
    <div
      class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"
    >
      <Card
        v-if="!global.loading"
        v-for="item in global.$state.items"
        :name="item.name"
        :type="global.category"
        :uuid="item.uuid"
        :sub-info="item"
      />
      <p v-else>Chargement des données</p>
    </div>
  </div>
</template>
