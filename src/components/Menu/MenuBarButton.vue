<script setup lang="ts">
import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

defineProps<{
  text: string;
}>();
</script>

<template>
  <div
    :class="[
      {
        active: store.currentTab === text,
        'not-allowed': store.loadingState,
      },
      'flex-container',
    ]"
    @click="store.changeTab(text)"
    :title="text"
  >
    <slot></slot>
    <div v-if="store.maximizeStatus == 'maximize'">{{ text }}</div>
  </div>
</template>
