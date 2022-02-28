<script setup lang="ts">
import { onMounted } from "vue";

import MinimizeIcon from "@/assets/icons/MinimizeIcon.vue";
import NormalizeIcon from "@/assets/icons/NormalizeIcon.vue";
import MaximizeIcon from "@/assets/icons/MaximizeIcon.vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

onMounted(() => {
  window.api.receive("maximize-status", (data: string) => {
    store.maximizeStatus = data;
  });
});

function close() {
  window.api.send("close");
}

function minimize() {
  window.api.send("minimize");
}

function maximize() {
  window.api.send("maximize");
}

function unmaximize() {
  window.api.send("restore");
}
</script>

<template>
  <header id="titlebar" class="drag-region">
    <div id="window-title">
      <span>Tally</span>
    </div>
    <div id="window-controls">
      <div class="button" id="min-button" @click="minimize">
        <MinimizeIcon />
      </div>

      <div
        v-if="store.maximizeStatus === 'maximize'"
        class="button"
        id="unmaximize-button"
        @click="unmaximize"
      >
        <MaximizeIcon />
      </div>

      <div v-else class="button" id="max-button" @click="maximize">
        <NormalizeIcon />
      </div>

      <div class="button" id="close-button" @click="close">
        <CloseIcon />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
#titlebar {
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #707070;
  background-color: darken($background, 5%);

  #window-title {
    font-size: 18px;
    font-family: "Rubik Regular";
    letter-spacing: 2px;
    margin-left: 16px;
  }

  #window-controls {
    display: flex;
    flex-direction: row;
    height: 100%;
    -webkit-app-region: no-drag;

    .button {
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      fill: #ffffff;
      transition: 0.2s;

      &:hover,
      &:active {
        background: rgba(255, 255, 255, 0.1);
      }
    }

    #close-button {
      &:hover {
        background: #e81123 !important;
      }
      &:active {
        background: #f1707a !important;
      }
    }
  }
}

.drag-region {
  width: 100%;
  height: 100%;
  -webkit-app-region: drag;
}
</style>
