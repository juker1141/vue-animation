import { createApp } from "vue";
import App from "./App.vue";
// import App2 from "./App2.vue";
// import Greeting from "./components/Greeting.vue";

const vm = createApp(App);

// vm.component("Greeting", Greeting);

vm.mount("#app");
