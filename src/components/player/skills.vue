<script setup>
import farmer from '../../assets/images/farmer.webp'
import hunter from '../../assets/images/hunter.webp'
import lumberjack from '../../assets/images/lumberjack.webp'
import miner from '../../assets/images/miner.webp'

const mmotab = [farmer, hunter, lumberjack, miner]
const props = defineProps({
  mmo: Object,
  uuid: String
})
</script>

<template>
  <div class="flex sm:flex-row flex-col w-full justify-center">
    <div class="flex flex-col w-4/6">
      <div class="relative w-16 h-16 mb-5 ml-4" v-for="(talent, index) in props?.mmo?.talents">
        <div
          class="absolute w-full h-full rounded-full bg-gray-200 flex items-center justify-center"
        >
          <img
            :src="mmotab[index]"
            alt="Small Image"
            class="w-10 h-10 object-contain relative z-30"
          />
        </div>
        <div
          class="absolute top-0 left-0 w-full h-full rounded-full bg-orange flex items-center justify-center z-10"
        ></div>
        <h2 class="text-center sm:w-96 w-72">{{ talent.name }} niveau: {{ talent.level }}</h2>
        <div
          class="sm:w-96 w-56 h-7 rounded-full bg-gray-300 absolute bottom-0 left-4 z-1 flex flex-col"
        >
          <h2 class="text-center w-full absolute z-30">
            {{ (Math.trunc(talent.xp) - talent.minLevelXp) / 100 }}%
          </h2>
          <div
            v-if="talent.lvl !== 100"
            class="h-full rounded-full absolute bottom-0"
            :style="
              'background: linear-gradient(90deg,rgb(255, 140, 66)  0%, rgb(255, 140, 66)' +
              ((Math.trunc(talent.xp) - talent.minLevelXp) * 100) / talent.xpToNextLevel +
              '%, rgb(78, 89, 140)' +
              ((Math.trunc(talent.xp) - talent.minLevelXp) * 100) / talent.xpToNextLevel +
              1 +
              '%); width:' +
              (Math.trunc(talent.xp) - talent.minLevelXp) / 100 +
              '%'
            "
          ></div>
          <div
            v-else
            class="h-full rounded-full absolute bottom-0 w-full"
            :style="'background: linear-gradient(90deg,#FF8C42  0%, #4e598c 100%);'"
          ></div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <img :src="'https://mc-heads.net/body/' + props?.uuid" class="mx-auto my-auto" />
    </div>
  </div>
</template>
