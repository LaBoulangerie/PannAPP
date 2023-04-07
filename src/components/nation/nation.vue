<script setup>
import NationInfos from './nationInfos.vue'
import TopPartNation from './topPartNation.vue'
import NationTowns from './nationTowns.vue'
import NationResidents from './nationResidents.vue'
const props = defineProps({
  data: Object
})

function scroll(component) {
  const element = document.querySelector('.' + component)
  element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="overflow-y-scroll mt-24 sm:mt-0">
    <TopPartNation
      :spawn="props?.data[0]?.spawn"
      @towns="scroll('towns')"
      @residents="scroll('residents')"
    />
    <NationInfos :data="props?.data[0]" class="info" />
    <NationTowns :towns="props?.data[0]?.towns" class="towns" />
    <NationResidents :residents="props?.data[0]?.residents" class="residents" />
  </div>
</template>
