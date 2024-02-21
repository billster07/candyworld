import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "./style.css";

import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
