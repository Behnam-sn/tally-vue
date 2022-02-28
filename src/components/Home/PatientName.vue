<script setup lang="ts">
import { computed } from "vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

const info = computed(() => {
  if (store.message.type === "info") {
    return store.message.message;
  } else {
    return "";
  }
});
</script>

<template>
  <div class="patient-name-container">
    <transition name="slide">
      <div class="patient-name" :key="info">
        {{ info }}
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
#home {
  .patient-name-container {
    display: inline-block;
    position: relative;
  }

  .patient-name {
    position: absolute;
    font-size: 17px;
    text-align: center;
    margin-top: 50px;
    width: 100%;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.35s ease-out;
  }

  .slide-enter-from {
    opacity: 0;
    transform: translatex(60px);
  }

  .slide-leave-to {
    opacity: 0;
    transform: translatex(-60px);
  }
}
</style>
