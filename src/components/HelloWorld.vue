<template>
  <div class="flex flex-col h-screen select-none bg-white pt-48">
    <img class="w-1/2 md:w-1/4 self-center absolute z-10 opacity-0 transition-opacity" :class="{'opacity-100': state.showImg}" alt="404" src="../assets/404.webp" />
    <img class="w-1/2 md:w-1/4 self-center" loop alt="404" ref="animotion" src="../assets/404.gif" />
    <h1 class="font-mono text-center text-xs md:text-xl mt-10">{{ msg }}</h1>
  </div>
</template>

<script setup>
import { nextTick, reactive, ref } from 'vue'

defineProps({
  msg: String
})
const animotion = ref(null)
const state = reactive({ showImg: true })
const action = () => {
  state.showImg = false
}
nextTick(() => {
  animotion.value.onload = action
})
</script>

<style scoped></style>
