<script setup>
import Infos from './infos.vue'
import Nation from './nation.vue'
import Residents from './residents.vue'
import TopPart from './topPart.vue'

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
    <TopPart
      :spawn="props?.data[0]?.spawn"
      @players="scroll('residents')"
      @nation="scroll('nation')"
    />
    <Infos :data="props?.data[0]" class="infos" />
    <Residents :residents="props?.data[0]?.residents" class="residents" />
    <Nation v-if="props?.data[0]?.nation" :nation="props?.data[0]?.nation" class="nation" />
  </div>
</template>
