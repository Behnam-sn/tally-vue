<script setup lang="ts">
import CopyButton from "@/components/StreamNeo/CopyButton.vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();
</script>

<template>
  <div class="informations">
    <div>نام و نام خانوادگی: {{ store.currentTest.name }}</div>
    <div>درمانگر: {{ store.currentTest.therapist }}</div>
    <div>تاریخ: {{ store.currentTest.date }}</div>
    <div>
      کاملا موافقم:
      {{ store.currentTest.totallyAgreeTotal }}
    </div>
    <div>موافقم: {{ store.currentTest.agreeTotal }}</div>
    <div>نظری ندارم: {{ store.currentTest.noOpinionTotal }}</div>
    <div>مخالفم: {{ store.currentTest.disAgreeTotal }}</div>
    <div>
      کاملا مخالفم:
      {{ store.currentTest.totallyDisAgreeTotal }}
    </div>
    <div class="valid" v-if="store.currentTest.validate">معتبر</div>
    <div class="invalid" v-else>نا معتبر</div>
    <CopyButton />
  </div>
</template>

<style lang="scss">
#stream-neo {
  .informations {
    direction: rtl;
    position: relative;
    margin: 25px 20px;
    padding: 25px 30px;
    background: $filler;
    border-radius: 18px;

    > div {
      font-size: 18px;
      padding: 3px 0px;
    }
  }

  .valid {
    width: fit-content;
    border-bottom: 4px solid #22c55e;
  }

  .invalid {
    width: fit-content;
    border-bottom: 4px solid #ef4444;
  }
}
</style>
