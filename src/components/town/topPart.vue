<script setup>
const props = defineProps({
  spawn: Object
})
const emits = defineEmits(['players', 'nation'])
</script>

<template>
  <iframe
    class="w-full h-96 no-controls"
    allowfullscreen="false"
    :src="`https://laboulangerie.net/map/#minecraft_overworld;flat;${props?.spawn?.x},64,${props?.spawn?.z};5`"
  />

  <div class="flex flex-row sm:flex-row justify-center items-center space-x-4 mt-5">
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      @click="emits('players')"
    >
      Joueurs
    </button>
    <button
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      @click="emits('nation')"
    >
      Nation
    </button>
  </div>
</template>

<style scoped>
.no-controls::-webkit-media-controls {
  display: none !important;
}

.no-controls::-webkit-media-controls-enclosure {
  display: none !important;
}
</style>
