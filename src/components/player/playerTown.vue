<script setup>
import Card from '../feed/card.vue'

const props = defineProps({
  town: Object
})
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-4 text-orange">Ville</h3>

    <Card :name="props.town.name" type="town" :uuid="props.town.uuid" />
  </div>
</template>
