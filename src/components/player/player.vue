<script setup>
import PlayerNation from './playerNation.vue'
import PlayerTopPart from './playerTopPart.vue'
import PlayerTown from './playerTown.vue'
import Skills from './skills.vue'

const props = defineProps({
  data: Object
})

function scroll(component) {
  const element = document.querySelector('.' + component)
  element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="overflow-y-scroll mt-24 md:mt-0 md:ml-4">
    <PlayerTopPart :name="data[0]?.name" :online="data[0]?.isOnline" @town="scroll('town')" @nation="scroll('nation')" />
    <Skills :mmo="data[0]?.mmo" :uuid="data[0]?.uuid" />
    <PlayerTown v-if="props?.data[0]?.resident" :town="data[0]?.resident?.town" class="town" />
    <PlayerNation v-if="props?.data[0]?.resident?.nation" :nation="data[0]?.resident?.nation" class="nation" />
  </div>
</template>
