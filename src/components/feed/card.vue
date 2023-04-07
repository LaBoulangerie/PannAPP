<script setup>
import { computed, ref } from 'vue'
import nation from '../../assets/images/nation.png'
import town from '../../assets/images/town.png'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  name: String,
  type: String,
  uuid: String,
  subInfo: Object
})
const info = ref('NaN')
if (props.subInfo && props.subInfo.type) {
  info.value = props?.subInfo?.type
}
const img = computed(() => {
  return props.type === 'town' ? town : nation
})

function changeRoute(nameString) {
  if (props?.type !== 'staff' && props.type !== 'donors') {
    router.push({ name: 'card', params: { type: props.type, name: nameString } })
  }
}
</script>

<template>
  <div @click="changeRoute(props.name)">
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg bg-cardBlue text-white"
      :class="{ 'cursor-pointer': props?.type !== 'staff' && props.type !== 'donors' }"
    >
      <img
        class="w-full"
        :src="img"
        :alt="props.type"
        v-if="props.type !== 'player' && props.type !== 'staff' && props.type !== 'donors'"
      />
      <img
        v-else
        class="w-full"
        :src="'https://mc-heads.net/avatar/' + props.uuid"
        :alt="props.type"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-lg mb-2">{{ props.name }}</div>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-orange rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
          >{{ props?.type }}</span
        >
        <span
          v-if="info !== 'NaN' && props.type == 'donors'"
          class="inline-block bg-donors rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
          >{{ info }}€</span
        >
        <span
          v-if="info !== 'NaN' && props.type == 'staff'"
          class="text-white"
          :class="{
            'inline-block bg-gradient-to-r from-owner  to-owner2 rounded-full px-3 py-1 text-sm font-semibold text- mr-2 mb-2':
              info == 'owner',
            'inline-block bg-gradient-to-r from-mod  to-mod2 rounded-full px-3 py-1 text-sm font-semibold text- mr-2 mb-2':
              info == 'mod',
            'inline-block bg-gradient-to-r from-cs  to-cs2 rounded-full px-3 py-1 text-sm font-semibold text- mr-2 mb-2':
              info == 'multi',
            'inline-block bg-gradient-to-r from-dev  to-dev2 rounded-full px-3 py-1 text-sm font-semibold text- mr-2 mb-2':
              info == 'dev',
            'inline-block bg-gradient-to-r from-builder  to-builder2 rounded-full px-3 py-1 text-sm font-semibold text- mr-2 mb-2':
              info == 'builder',
            'inline-block bg-gradient-to-r from-inter  to-inter2 rounded-full px-3 py-1 text-sm font-semibold text- mr-2 mb-2':
              info == 'contributor'
          }"
          >{{ info }}</span
        >
      </div>
    </div>
  </div>
</template>
