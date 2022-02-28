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

    <transition name="app-fade" mode="out-in">
      <div v-if="store.connectionState" id="container">
        <MenuBar />
        <transition name="app-fade" mode="out-in">
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

  .app-fade-enter-active {
    animation: appFade 0.35s ease-in-out;
  }
  .app-fade-leave-active {
    animation: appFade 0.35s ease-in-out reverse;
  }

  @keyframes appFade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  #container {
    display: flex;
    flex-direction: row;
  }
}
</style>
