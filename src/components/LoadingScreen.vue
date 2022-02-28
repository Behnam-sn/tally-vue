<script setup lang="ts">
import { computed } from "vue";

import Balls from "@/components/Loaders/BallsLoader.vue";
import Cat from "@/components/Loaders/CatLoader.vue";
import Circles from "@/components/Loaders/CirclesLoader.vue";
import Cubes from "@/components/Loaders/CubesLoader.vue";
import Defult from "@/components/Loaders/DefultLoader.vue";
import Diamond from "@/components/Loaders/DiamondLoading.vue";
import Hexagon from "@/components/Loaders/HexagonLoader.vue";
import Rainbow from "@/components/Loaders/RainbowLoader.vue";
import Spinner from "@/components/Loaders/SpinnerLoader.vue";
import Tiles from "@/components/Loaders/TilesLoader.vue";
import Tornado from "@/components/Loaders/TornadoLoader.vue";
import Waves from "@/components/Loaders/WavesLoader.vue";

// const currentLoader = ref("Tornado");

const loaders = [
  Balls,
  Cat,
  Circles,
  Cubes,
  Defult,
  Diamond,
  Hexagon,
  Rainbow,
  Spinner,
  Tiles,
  Tornado,
  Waves,
];

const currentLoader = computed(() => {
  return Math.floor(Math.random() * loaders.length);
});
</script>

<template>
  <div id="loading-screen">
    <component :is="loaders[currentLoader]"></component>
  </div>
</template>

<style lang="scss">
#loading-screen {
  width: 100%;
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
