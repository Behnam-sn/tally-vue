<script setup lang="ts">
import { computed } from "vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

const lastPatient = computed(() => {
  return store.review.patients.length - 1;
});

function next() {
  store.review.transitionName = "slide-next";
  store.review.currentIndex = store.review.currentIndex + 1;

  if (store.currentModifiedPatient !== undefined) {
    store.review.selectedType = store.currentModifiedPatient.selectedType;
  } else {
    store.review.selectedType = {
      "0": undefined,
      "1": undefined,
      "2": undefined,
      "3": undefined,
    };
  }
}

function previous() {
  store.review.transitionName = "slide-previous";
  store.review.currentIndex = store.review.currentIndex - 1;

  if (store.currentModifiedPatient !== undefined) {
    store.review.selectedType = store.currentModifiedPatient.selectedType;
  } else {
    store.review.selectedType = {
      "0": undefined,
      "1": undefined,
      "2": undefined,
      "3": undefined,
    };
  }
}

function finish() {
  const list = store.review.modifiedPatients.filter((item) => {
    return item.type.includes("?") === false;
  });

  store.changeTab("Home");
  store.sendMessage({
    type: "reciveReview",
    message: list.map((obj) => {
      return {
        id: obj.id,
        type: obj.type,
      };
    }),
  });
  store.resetReview();
}
</script>

<template>
  <div id="control-bar">
    <button
      v-if="store.review.currentIndex != 0"
      id="btn-perv"
      @click="previous"
    >
      Previous
    </button>
    <button
      v-if="store.review.currentIndex === lastPatient"
      id="btn-fin"
      @click="finish"
    >
      Finish
    </button>
    <button v-else id="btn-next" @click="next">Next</button>
  </div>
</template>

<style lang="scss">
#control-bar {
  background-color: darken($background, 8%);

  #btn-next,
  #btn-perv,
  #btn-fin {
    width: 80px;
    font-size: 14px;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 0;
    margin: 18px 0;
    cursor: pointer;
    transition: 0.3s;

    &:focus {
      outline: none;
    }
  }

  #btn-next {
    margin-right: 20px;
    background-color: $btn-next;

    &:hover {
      background-color: darken($btn-next, 5%);
    }
  }

  #btn-fin {
    margin-right: 20px;
    background-color: $btn-fin;

    &:hover {
      background-color: darken($btn-fin, 5%);
    }
  }

  #btn-perv {
    margin-right: 13px;
    background-color: $btn-perv;

    &:hover {
      background-color: darken($btn-perv, 5%);
    }
  }
}
</style>
