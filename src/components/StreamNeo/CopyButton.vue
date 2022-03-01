<script setup lang="ts">
import { ref } from "vue";

import CopyIcon from "@/assets/icons/CopyIcon.vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

const tooltipVisibility = ref(false);

function copyToClipborad() {
  let text = "";
  text += `نام و نام خانوادگی: ${store.currentTest.name}\n`;
  text += `درمانگر: ${store.currentTest.therapist}\n`;
  text += `تاریخ: ${store.currentTest.date}\n\n`;
  text += `کاملا موافقم: ${store.currentTest.totallyAgreeTotal}\n`;
  text += `موافقم: ${store.currentTest.agreeTotal}\n`;
  text += `نظری ندارم: ${store.currentTest.noOpinionTotal}\n`;
  text += `مخالفم: ${store.currentTest.disAgreeTotal}\n`;
  text += `کاملا مخالفم: ${store.currentTest.totallyDisAgreeTotal}\n`;
  if (store.currentTest.validate) {
    text += "معتبر\n\n";
  } else {
    text += "نامعتبر\n\n";
  }
  store.currentTest.answers.forEach(
    (value, index) => (text += `${index + 1}. ${value}\n`)
  );

  navigator.clipboard.writeText(text);
  showTooltip();
}

async function showTooltip() {
  tooltipVisibility.value = true;
  await sleep(1500);
  tooltipVisibility.value = false;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>

<template>
  <button @click="copyToClipborad()" class="copy">
    <CopyIcon />
  </button>
  <Transition name="copy-fade">
    <div class="tooltip" v-show="tooltipVisibility">Copied</div>
  </Transition>
</template>

<style lang="scss">
#stream-neo {
  .copy {
    position: absolute;
    left: 20px;
    top: 20px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: darken($filler, 10%);
    padding: 10px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background: darken($filler, 5%);
    }

    svg {
      height: 34px;
      width: 34px;
      fill: #ffffff;
    }
  }

  .tooltip {
    position: absolute;
    left: 14px;
    top: 85px;
    z-index: 1;
    font-size: 16px !important;
    background-color: darken($filler, 15%);
    padding: 5px 8px !important;
    border-radius: 6px;

    &::after {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent darken($filler, 15%) transparent;
    }
  }

  .copy-fade-enter-active,
  .copy-fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .copy-fade-enter-from,
  .copy-fade-leave-to {
    opacity: 0;
  }
}
</style>
