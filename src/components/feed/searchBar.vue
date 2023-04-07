<script setup>
import { ref } from 'vue'
import { useGlobal } from '../../stores/counter'
import { useRouter } from 'vue-router'
const router = useRouter()
const inputValue = ref('')
const global = useGlobal()
function search() {
  global.searchQuery = inputValue.value

  router.push({ name: 'searchFeed', params: { query: inputValue.value } })
  inputValue.value = ''
}
</script>

<template>
  <div class="flex flex-col items-end mr-5 md:mt-5 mt-48 ml-5">
    <div class="max-w-xl">
      <div class="flex space-x-4">
        <div class="flex rounded-md overflow-hidden w-full">
          <input type="text" class="w-full rounded-md rounded-r-none" v-model="inputValue" />
          <button
            class="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md"
            @click="search"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
