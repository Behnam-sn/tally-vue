<script setup lang="ts">
import Home from "@/views/HomeView.vue";
import Log from "@/views/LogView.vue";
import Review from "@/views/ReviewView.vue";
import StreamNeo from "@/views/StreamNeo.vue";

import TitleBar from "@/components/TitleBar.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import MenuBar from "@/components/MenuBar.vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

store.startConnection();

const tabs: any = { Home, Log, Review, StreamNeo };
</script>

<template>
  <div id="app">
    <TitleBar />

    <transition name="fade" mode="out-in">
      <div v-if="store.connectionState" id="container">
        <MenuBar />
        <transition name="fade" mode="out-in">
          <component :is="tabs[store.currentTab]"></component>
        </transition>
      </div>
      <template v-else>
        <LoadingScreen />
      </template>
    </transition>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/global";

#app {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  #container {
    display: flex;
    flex-direction: row;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
