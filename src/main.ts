import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");

declare global {
  interface Window {
    // add you custom properties and methods
    api: any;
  }
}
