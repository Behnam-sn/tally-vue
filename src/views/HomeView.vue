<script setup lang="ts">
import StartButton from "@/components/Home/StartButton.vue";
import PatientName from "@/components/Home/PatientName.vue";
import VersionInfo from "@/components/Home/VersionInfo.vue";
</script>

<template>
  <div id="home">
    <StartButton />
    <PatientName />
    <VersionInfo />
  </div>
</template>

<style lang="scss">
#home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  user-select: none;
}
</style>
