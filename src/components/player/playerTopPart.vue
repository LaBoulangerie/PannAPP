<script setup>
const props = defineProps({
  name: String,
  online: Object
})
const emits = defineEmits(['town', 'nation'])
</script>

<template>
  <h1 class="text-4xl sm:text-5xl lg:text-6xl text-orange font-bold mb-4 mt-4 ml-4">
    {{ props.name }}
  </h1>
  <div class="flex flex-row sm:flex-row justify-center items-center space-x-4 mt-6 mb-6">
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="emits('town')">
      Ville
    </button>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="emits('nation')">
      Nation
    </button>
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" v-if="props.online">
      Online
    </button>
    <button v-else class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Offline
    </button>
  </div>
</template>
