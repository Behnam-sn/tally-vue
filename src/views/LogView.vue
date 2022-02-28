<script setup lang="ts">
import { onBeforeMount, onUpdated, computed } from "vue";

import { useIndexStore } from "@/stores/index";
const store = useIndexStore();

onBeforeMount(() => {
  store.sendMessage({
    type: "command",
    message: "log",
  });
});

onUpdated(() => {
  var l = document.querySelector("#log") as HTMLElement;
  l.scrollTop = l.scrollHeight;
});

const logs = computed(() => {
  if (store.message.type === "log") {
    return store.message.message;
  } else {
    return undefined;
  }
});
</script>

<template>
  <div id="log">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>تاریخ</th>
          <th>ساعت</th>
          <th>نام و نام خانوادگی</th>
          <th>تست</th>
          <th>درمانگر</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="log in logs" :key="log[0]">
          <td>{{ log[0] }}</td>
          <td>{{ log[1] }}</td>
          <td>{{ log[2] }}</td>
          <td>{{ log[3] }}</td>
          <td>{{ log[4] }}</td>
          <td>{{ log[5] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
#log {
  width: 100%;
  height: 94vh;
  font-size: 14px;
  text-align: center;
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

  table {
    width: 100%;
    position: relative;
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  td {
    padding: 20px 10px;
  }

  th {
    color: #ffffff;
    background-color: #009879;
    position: sticky;
    top: 0;
    padding: 15px 0;
    z-index: 10;
  }

  tbody {
    tr {
      border-bottom: 1px solid #dddddd;
    }

    tr:nth-of-type(even) {
      background-color: #0a0a0a;
    }
  }
}
</style>
