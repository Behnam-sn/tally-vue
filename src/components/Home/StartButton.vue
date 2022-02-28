<script setup lang="ts">
import { ref, computed, watch } from "vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

const buttonText = ref("start");

function start() {
  store.sendMessage({
    type: "command",
    message: "start",
  });
}

const isLoading = computed(() => {
  if (buttonText.value === "start") {
    return false;
  } else {
    return true;
  }
});

watch(
  () => store.message,
  (message) => {
    if (message.type === "title") {
      buttonText.value = String(message.message);
    }
  }
);

let root = document.querySelector(":root") as HTMLElement;
watch(
  () => buttonText.value,
  async (val: string) => {
    switch (val) {
      case "schema":
        root.style.setProperty("--btnColor", "#08D9D6");
        break;
      case "mbti":
        root.style.setProperty("--btnColor", "#F9ED69");
        break;
      case "lovestory":
        root.style.setProperty("--btnColor", "#CCAEE9");
        break;
      case "glasser":
        root.style.setProperty("--btnColor", "#FF5722");
        break;
      case "neo":
        root.style.setProperty("--btnColor", "#FCD8D4");
        break;
      case "scl":
        root.style.setProperty("--btnColor", "#185ADB");
        break;
      case "saving...":
        root.style.setProperty("--btnColor", "#06D6A0");
        break;
      default:
        root.style.setProperty("--btnColor", "#FF2E63");
    }
  }
);
</script>

<template>
  <button id="start-btn" :class="{ breathing: isLoading }" @click="start">
    <transition name="rotate" mode="out-in">
      <div :key="buttonText">
        {{ buttonText.toUpperCase() }}
      </div>
    </transition>
  </button>
</template>

<style lang="scss">
:root {
  --btnColor: #ff2e63;
}

@keyframes breathe {
  0% {
    box-shadow: var(--btnColor) 0px 0px 0px;
  }
  50% {
    box-shadow: var(--btnColor) 0px 0px 40px;
  }
  100% {
    box-shadow: var(--btnColor) 0px 0px 0px;
  }
}

.breathing {
  animation: breathe 4s ease-in-out infinite;
}

#home {
  #start-btn {
    font-family: "Open Sans ExtraBold";
    font-size: 30px;
    width: 240px;
    height: 240px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    color: #ffffff;
    background-color: transparent;
    border-width: 9px;
    border-style: solid;
    border-radius: 50%;
    border-color: var(--btnColor);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }
  .rotate-leave-active,
  .rotate-enter-active {
    transition: 0.35s ease;
  }

  .rotate-enter-from {
    transform: rotateX(-90deg);
    opacity: 0;
  }

  .rotate-leave-to {
    transform: rotateX(90deg);
    opacity: 0;
  }
}
</style>
