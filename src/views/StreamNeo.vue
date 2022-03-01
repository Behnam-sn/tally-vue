<script setup lang="ts">
import { onBeforeMount, watch } from "vue";

import TheLoader from "@/components/StreamNeo/TheLoader.vue";
import ControlBar from "@/components/StreamNeo/ControlBar.vue";
import TheInformations from "@/components/StreamNeo/TheInformations.vue";
import TheAnswers from "@/components/StreamNeo/TheAnswers.vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

onBeforeMount(() => {
  store.sendMessage({
    type: "command",
    message: "streamNeo",
  });
});

watch(
  () => store.message,
  (message) => {
    if (message.type === "streamNeo") {
      store.streamNeo.tests = message.message;
      store.streamNeo.lastIndex = store.streamNeo.tests.length - 1;
      store.streamNeo.currentIndex = store.streamNeo.lastIndex;
    }
  }
);
</script>

<template>
  <div id="stream-neo">
    <template v-if="store.loadingState">
      <TheLoader />
    </template>
    <template v-else>
      <ControlBar />
      <TheInformations />
      <TheAnswers />
    </template>
  </div>
</template>

<style lang="scss">
#stream-neo {
  width: 100%;
  height: 94vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    background: darken($background, 3%);
  }

  &::-webkit-scrollbar-thumb {
    background: $filler;
  }

  &::-webkit-scrollbar-corner {
    background: darken($background, 3%);
  }
}
</style>
