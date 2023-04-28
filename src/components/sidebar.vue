<script setup>
import { categories } from '../utils/categories'
import logo from '../assets/images/icon.svg'
import { useGlobal } from '../stores/counter'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const store = useGlobal()
const router = useRouter()
const activeIndex = ref('1')
function changeCategory(cat) {
  store.changeCat(cat)
  store.getCat()
  router.push({ name: 'home' })
}

function goToFeed() {
  router.push({ name: "home" })
  store.changeCat("town")
  store.getCat()
  activeIndex.value = 0
}
</script>

<template>
  <aside id="default-sidebar"
    class="sidebar fixed md:top-0 md:left-0 md:z-40 md:w-32 md:h-screen md:transition-transform md:translate-x-0 flex z-40"
    aria-label="Sidebar">
    <div class="md:hidden flex flex-row bg-cardBlue mb-8 p-5 sidebarResp">
      <ul class="flex flex-row">
        <img class="w-12 ml-0 mr-8" :src="logo" @click="goToFeed" />
        <div class="overflow-x-scroll flex flex-row w-screen px-8">
          <li v-for="(category, index) in categories"
            class="flex flex-col items-center p-8 text-base font-bold rounded-lg text-white w-32 mr-6 ml-4"
            @click="changeCategory(category.cat), (activeIndex = index)" :class="{ 'bg-orange': activeIndex === index }">
            <fas :icon="category.icon" size="2x" class="mb-2" />
            <p>{{ category.name }}</p>
          </li>
        </div>
      </ul>
    </div>
    <div class="h-full px-2 py-10 overflow-y-auto bg-cardBlue dark:bg-gray-800 md:flex hidden overflow-x-hidden">
      <ul class="space-y-2">
        <li v-for="(category, index) in categories" @click="changeCategory(category.cat), (activeIndex = index)"
          class="flex flex-col items-center p-4 text-base font-bold rounded-lg text-white cursor-pointer"
          :class="{ 'bg-orange': activeIndex === index }">
          <fas :icon="category.icon" size="2x" class="mb-3" />
          <p>{{ category.name }}</p>
        </li>
      </ul>
      <div class="flex absolute bottom-2  left-0 justify-center w-full">
        <img class="w-16 cursor-pointer" :src="logo" @click="goToFeed" />
      </div>

    </div>
  </aside>
</template>

<style scoped></style>
