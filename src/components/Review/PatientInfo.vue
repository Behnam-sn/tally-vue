<script setup lang="ts">
import { ref } from "vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

const types: any = ref([
  ["E", "I"],
  ["S", "N"],
  ["T", "F"],
  ["J", "P"],
]);

const colors: any = ref([
  {
    E: "#9C0F2F",
    I: "#3F37C9",
  },
  {
    S: "#FF567B",
    N: "#F72585",
  },
  {
    T: "#FF9F1C",
    F: "#F6A576",
  },
  {
    J: "#4CC9F0",
    P: "#548594",
  },
]);

const descriptions: any = ref([
  {
    E: "برونگرایی",
    I: "درونگرایی ",
  },
  {
    S: "حسی",
    N: "شهودی",
  },
  {
    T: "تفکری",
    F: "احساسی",
  },
  {
    J: "داور و چارچوب مدار",
    P: "منعطف",
  },
]);

function selectType(index: number, value: string) {
  if (store.review.selectedType[index] !== value) {
    store.review.selectedType[index] = value;
    ModifiedPatient();
  } else {
    store.review.selectedType[index] = "?";
    ModifiedPatient();
  }
}

function ModifiedPatient() {
  let allTypes = store.currentPatient.type;

  for (const property in store.review.selectedType) {
    let key = parseInt(property);
    let value = store.review.selectedType[property];

    if (value !== undefined) {
      allTypes = replaceAt(allTypes, key, value);
    }
  }

  store.review.modifiedPatients[store.review.currentIndex] = {
    id: store.currentPatient.id,
    type: allTypes,
    selectedType: store.review.selectedType,
  };
}

function replaceAt(str: string, index: number, replacement: string) {
  return (
    str.substring(0, index) + replacement + str.substring(index + 1, str.length)
  );
}
</script>

<template>
  <div class="patient-wrapper">
    <transition :name="store.review.transitionName">
      <div class="patient" :key="store.currentPatient.name">
        <div class="patient-name">{{ store.currentPatient.name }}</div>
        <div class="patient-therapist">
          {{ store.currentPatient.therapist }}
        </div>
        <div class="patient-type">
          <template v-for="(type, index) in store.currentPatient.type">
            <div v-if="type === '?'" :key="index + type" class="unknown">
              <template v-for="value in types[index]" :key="value">
                <div
                  class="unknown-item"
                  :class="{
                    selected: store.review.selectedType[index] === value,
                  }"
                  :style="{
                    backgroundColor: colors[index][value],
                  }"
                  @click="selectType(index, value)"
                >
                  <div>{{ descriptions[index][value] }}</div>
                  <div class="letter">{{ value }}</div>
                </div>
              </template>
            </div>
            <div
              v-else
              class="item"
              :style="{ backgroundColor: colors[index][type] }"
              :key="type"
            >
              <div>{{ descriptions[index][type] }}</div>
              <div class="letter">{{ type }}</div>
            </div>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
#review {
  .slide-next-leave-active,
  .slide-next-enter-active {
    transition: all 1s ease-out;
  }

  .slide-next-enter-from {
    transform: translateX(100%) scale(0.8);
  }

  .slide-next-leave-to {
    transform: translateX(-100%) scale(0.8);
  }

  .slide-previous-leave-active,
  .slide-previous-enter-active {
    transition: all 1s ease-out;
  }

  .slide-previous-enter-from {
    transform: translateX(-100%) scale(0.8);
  }

  .slide-previous-leave-to {
    transform: translateX(100%) scale(0.8);
  }

  .patient-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .patient {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    direction: rtl;
  }

  .patient-name {
    font-size: 25px;
    margin-right: 40px;
    margin-top: 20px;
  }

  .patient-therapist {
    font-family: "Estedad Light";
    font-size: 18px;
    margin-right: 40px;
    margin-bottom: 20px;
  }

  .patient-type {
    font-size: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .item {
      flex-grow: 1;
      display: flex;
      align-items: center;

      div {
        padding-right: 20px;
      }
    }

    .letter {
      font-family: "Open Sans Regular";
      font-size: 22px;
    }

    .unknown {
      flex-grow: 1;
      display: flex;
      cursor: pointer;
    }

    .unknown-item {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      transition: 0.3s;

      div {
        padding-right: 20px;
      }

      &:hover {
        filter: brightness(75%);
      }
    }

    .selected {
      filter: brightness(60%) !important;
    }
  }
}
</style>
