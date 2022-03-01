<script setup lang="ts">
import ArrowForwardIcon from "@/assets/icons/ArrowForwardIcon.vue";
import ArrowBackIcon from "@/assets/icons/ArrowBackIcon.vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

function next() {
  if (store.streamNeo.currentIndex !== store.streamNeo.lastIndex) {
    store.streamNeo.currentIndex++;
  }
}

function previous() {
  if (store.streamNeo.currentIndex !== 1) {
    store.streamNeo.currentIndex--;
  }
}
</script>

<template>
  <div id="controls">
    <button @click="next()">
      <ArrowForwardIcon />
    </button>

    <div>{{ store.currentTest.id }}</div>

    <button @click="previous()">
      <ArrowBackIcon />
    </button>
  </div>
</template>

<style lang="scss">
#stream-neo {
  #controls {
    direction: rtl;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    padding: 15px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: lighten($background, 5%);
      color: #ffffff;
      padding: 8px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        background: lighten($background, 10%);
      }
    }

    svg {
      height: 30px;
      width: 30px;
    }
  }
}
</style>
