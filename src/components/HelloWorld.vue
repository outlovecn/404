<template>
  <div class="wrap">
    <img class="media img" :class="{img1: state.showImg}" alt="404" src="../assets/404.webp" />
    <img class="media" loop alt="404" ref="animotion" src="../assets/404.gif" />
    <h1 class="msg">{{ msg }}</h1>
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

<style scoped>
.wrap {
  @apply flex flex-col h-screen select-none bg-white pt-48
}
.media {
  @apply w-1/2 md:w-1/4 self-center
}
.img {
  @apply absolute z-10 opacity-0 transition-opacity
}
.img1 {
  @apply opacity-100
}
.msg {
  @apply font-mono text-center text-xs md:text-xl mt-10
}
</style>
