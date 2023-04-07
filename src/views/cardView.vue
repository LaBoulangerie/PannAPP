<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobal } from '../stores/counter'
import SideBar from '../components/sidebar.vue'
import Town from '../components/town/town.vue'
import Player from '../components/player/player.vue'
import Nation from '../components/nation/nation.vue'
const global = useGlobal()
const route = useRoute()
const name = ref(route.params.name)
const category = ref(route.params.type)
onMounted(() => {
  global.searchFromApi(category.value, name.value)
})
onUpdated(() => {
  if (category.value !== route.params.type) {
    category.value = route.params.type
    name.value = route.params.name
    global.searchFromApi(category.value, name.value)
  }
})
</script>

<template>
  <div class="overflow-hidden overflow-y-scroll md:ml-28 md: h-screen">
    <div v-if="!global.loading">
      <Town v-if="category === 'town'" :data="global.items" />
      <Player v-if="category === 'player'" :data="global.items" />
      <Nation v-if="category === 'nation'" :data="global.items" />
    </div>
  </div>
</template>

<style scoped></style>
