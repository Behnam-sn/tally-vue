<script setup lang="ts">
import { ref } from "vue";

const appVersion = ref(window.api.send("app-version"));
const electronVersion = ref(window.api.send("electron-version"));
const visibility = ref(false);

function changeVisibility(value: boolean) {
  visibility.value = value;
}
</script>

<template>
  <div id="version">
    <div
      class="tooltip"
      @mouseenter="changeVisibility(true)"
      @mouseleave="changeVisibility(false)"
    >
      v {{ appVersion }}
      <transition name="version-fade">
        <div class="tooltiptext" v-show="visibility">
          <div>Tally : {{ appVersion }}</div>
          <div>Vue : 2.6.14</div>
          <div>Electron : {{ electronVersion }}</div>
          <div>Python : 3.9.4</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
#home {
  #version {
    font-family: "Open Sans Regular";
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 20px;
  }

  .tooltip {
    cursor: pointer;
    position: relative;

    .tooltiptext {
      width: 145px;
      background-color: lighten($background, 6%);
      color: #fff;
      text-align: center;
      border-radius: 6%;
      padding: 10px;
      position: absolute;
      z-index: 1;
      bottom: 150%;
      right: -10%;
      margin-left: -60px;
      box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
    }

    div {
      text-align: left;
      padding: 3px 0;

      &::after {
        content: "";
        position: absolute;
        top: 100%;
        right: 10%;
        margin-left: -5px;
        border-width: 8px;
        border-style: solid;
        border-color: lighten($background, 6%) transparent transparent
          transparent;
      }
    }
  }

  .version-fade-enter-active,
  .version-fade-leave-active {
    transition: opacity 0.6s ease-in-out 0.1s;
  }

  .version-fade-enter-from,
  .version-fade-leave-to {
    opacity: 0;
  }
}
</style>
