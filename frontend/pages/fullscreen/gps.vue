<script setup lang="ts">
import GPSMap from '~/components/Dashboard/GPSMap.vue'
definePageMeta({
  // @ts-ignore
  layout: 'dashboard'
})
</script>

<template>
  <div class="h-[100vh]">
    <GPSMap />
  </div>
</template>

<style scoped lang="scss"></style>
