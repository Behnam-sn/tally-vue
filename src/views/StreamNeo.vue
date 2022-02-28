<script setup lang="ts">
import { onBeforeMount, ref, computed, watch } from "vue";

import ArrowForwardIcon from "@/assets/icons/ArrowForwardIcon.vue";
import ArrowBackIcon from "@/assets/icons/ArrowBackIcon.vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

const currentIndex = ref(0);
const lastIndex = ref(0);

onBeforeMount(() => {
  store.sendMessage({
    type: "command",
    message: "streamNeo",
  });
});

const tests = computed(() => {
  if (store.message.type === "streamNeo") {
    return store.message.message;
  } else {
    return [];
  }
});

watch(tests, () => {
  lastIndex.value = tests.value.length - 1;
  currentIndex.value = lastIndex.value;
});

function next() {
  if (currentIndex.value !== lastIndex.value) {
    currentIndex.value++;
  }
}

function previous() {
  if (currentIndex.value !== 1) {
    currentIndex.value--;
  }
}
</script>

<template>
  <div id="stream-neo">
    <div id="loader-container" v-if="store.loadingState">
      <div class="loader"></div>
    </div>
    <div id="content-container" v-else>
      <div id="controls">
        <button @click="next">
          <ArrowForwardIcon />
        </button>
        <div>{{ tests[currentIndex].id }}</div>
        <button @click="previous">
          <ArrowBackIcon />
        </button>
      </div>
      <div>
        <div id="details">
          <div>نام و نام خانوادگی: {{ tests[currentIndex].name }}</div>
          <div>درمانگر: {{ tests[currentIndex].therapist }}</div>
          <div>تاریخ: {{ tests[currentIndex].date }}</div>
          <div>
            کاملا موافقم:
            {{ tests[currentIndex].totallyAgreeTotal }}
          </div>
          <div>موافقم: {{ tests[currentIndex].agreeTotal }}</div>
          <div>نظری ندارم: {{ tests[currentIndex].noOpinionTotal }}</div>
          <div>مخالفم: {{ tests[currentIndex].disAgreeTotal }}</div>
          <div>
            کاملا مخالفم:
            {{ tests[currentIndex].totallyDisAgreeTotal }}
          </div>
          <div>
            <template v-if="tests[currentIndex].validate"> معتبر </template>
            <template v-else>
              نا معتبر:
              <!-- {{ tests[currentIndex].validate.detail }} -->
            </template>
          </div>
        </div>
        <div
          class="answers"
          v-for="(answer, index) in tests[currentIndex].answers"
          :key="index"
        >
          {{ `${index + 1}. ${answer}` }}
        </div>
      </div>
    </div>
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
    background: #6a7a95;
  }

  &::-webkit-scrollbar-corner {
    background: darken($background, 3%);
  }

  #content-container {
    direction: rtl;
  }

  #controls {
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

  #details {
    margin: 25px 20px;
    padding: 20px 25px;
    background: #7b849b;
    border-radius: 18px;

    div {
      font-size: 18px;
      padding: 3px 0px;
    }
  }

  .answers {
    font-size: 16px;
    padding: 7px 50px;
    border-top: 3px solid #71dfe7;
  }

  #loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
  }

  .loader {
    border: 14px solid #f3f3f3;
    border-radius: 50%;
    border-top: 14px solid #555555;
    width: 120px;
    height: 120px;
    animation: spin 1.3s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .valid {
    background-color: green;
  }

  .invalid {
    background-color: red;
  }
}
</style>
