import { createApp, watch } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "./style.css";

import { createPinia } from "pinia";

import piniaPluginPersistedState from "pinia-plugin-persistedstate"

const pinia = createPinia();

pinia.use(piniaPluginPersistedState)

createApp(App).use(pinia).use(router).mount("#app");


