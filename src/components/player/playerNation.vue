<script setup>
import Card from '../feed/card.vue'

const props = defineProps({
  nation: Object
})
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-4 text-orange">Nation</h3>

    <Card :name="props.nation.name" type="nation" :uuid="props.nation.uuid" />
  </div>
</template>
