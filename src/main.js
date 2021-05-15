import Vue from "vue";
import { firestorePlugin } from "vuefire";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./firebase.js";
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
