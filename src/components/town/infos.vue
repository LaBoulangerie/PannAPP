<script setup>
import Card from '../feed/card.vue'

const props = defineProps({
  data: Object
})
</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-4 text-orange">
      {{ props?.data?.name }}
    </h1>
    <h2 class="text-lg sm:text-xl lg:text-2xl font-medium mb-6 text-cardBlue">
      {{ props?.data?.board }}
    </h2>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-cardBlue p-4 rounded-lg">
        <h3 class="text-lg font-bold mb-2 text-center text-black">Résidents</h3>
        <h2 class="text-lg font-bold mb-2 text-center text-white">
          {{ props?.data?.residents?.length }}
        </h2>
      </div>
      <div class="bg-cardBlue p-4 rounded-lg">
        <h3 class="text-lg font-bold mb-2 text-center text-black">Tag</h3>
        <h2 class="text-lg font-bold mb-2 text-center text-white">{{ props?.data?.tag }}</h2>
      </div>
      <div class="bg-cardBlue p-4 rounded-lg">
        <h3 class="text-lg font-bold mb-2 text-center text-black">Chunks</h3>
        <h2 class="text-lg font-bold mb-2 text-center text-white">
          {{ props?.data?.townBlocks?.length }}
        </h2>
      </div>
      <div class="bg-cardBlue p-4 rounded-lg">
        <h3 class="text-lg font-bold mb-2 text-center text-black">Balance</h3>
        <h2 class="text-lg font-bold mb-2 text-center text-white">{{ props?.data?.balance }}</h2>
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-4 text-orange font-Mc">
      Le maire
    </h3>
    <Card
      type="player"
      :name="props?.data?.mayor?.name"
      :uuid="props?.data?.mayor?.uuid"
      class="flex-grow w-96"
    />
  </div>
</template>
