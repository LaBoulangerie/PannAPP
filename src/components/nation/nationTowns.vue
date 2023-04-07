<script setup>
import Card from '../feed/card.vue'

const props = defineProps({
  towns: Object
})
</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-4 text-center text-orange">
      Les villes
    </h3>

    <div
      class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
    >
      <Card v-for="town in towns" :name="town.name" type="town" :uuid="town.uuid" />
    </div>
  </div>
</template>

<style scoped></style>
