<script setup lang="ts">
import { useIndexStore } from "@/stores/index";
const store = useIndexStore();
</script>

<template>
  <div
    class="answers"
    v-for="(answer, index) in store.currentTest.answers"
    :key="index"
  >
    {{ `${index + 1}. ${answer}` }}
  </div>
</template>

<style lang="scss">
.answers {
  direction: rtl;
  font-size: 16px;
  padding: 7px 50px;
  border-top: 3px solid #71dfe7;
}
</style>
