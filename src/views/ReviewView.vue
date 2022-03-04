<script setup lang="ts">
import { onBeforeMount, watch } from "vue";

import PatientInfo from "@/components/Review/PatientInfo.vue";
import ControlBar from "@/components/Review/ControlBar.vue";
import Ghost from "@/components/Review/TheGhost.vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

onBeforeMount(() => {
  store.resetReview();
  store.sendMessage({
    type: "command",
    message: "sendReview",
  });
});

watch(
  () => store.message,
  (message) => {
    if (message.type === "review") {
      const messageContent = message.message;
      if (messageContent.length === 0) {
        store.review.patients = [];
      } else {
        store.review.patients = messageContent;
      }
    }
  }
);
</script>

<template>
  <div id="review">
    <template v-if="store.review.patients.length !== 0">
      <PatientInfo />
      <ControlBar />
    </template>
    <template v-else>
      <Ghost />
    </template>
  </div>
</template>

<style lang="scss">
#review {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: right;
  user-select: none;
}
</style>
