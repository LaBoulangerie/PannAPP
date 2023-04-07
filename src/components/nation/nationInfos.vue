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
        <h3 class="text-lg font-bold mb-2 text-center">Villes</h3>
        <h2 class="text-lg font-bold mb-2 text-center">{{ props?.data?.towns?.length }}</h2>
      </div>
      <div class="bg-cardBlue p-4 rounded-lg">
        <h3 class="text-lg font-bold mb-2 text-center text-black">Balance</h3>
        <h3 class="text-lg font-bold mb-2 text-center text-white">{{ props?.data?.balance }}</h3>
      </div>
    </div>
  </div>
  <div class="flex flex-col -center items-center">
    <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-4 text-orange">
      Dirigeant et Capitale
    </h3>
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:gap-20 content-center gap-0"
    >
      <Card
        type="player"
        :name="props?.data?.king?.name"
        :uuid="props?.data?.king?.uuid"
        class="w-96"
      />

      <Card
        type="town"
        :name="props?.data?.capital?.name"
        :uuid="props?.data?.capital?.uuid"
        class="w-96"
      />
    </div>
  </div>
</template>
