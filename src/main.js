import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

//导入自己UI组件库
import myui from "@/components/library";

// 重置样式
import "normalize.css";
import "@/assets/styles/common.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(ElementPlus);
app.use(store);
app.use(router);
app.use(myui);
app.mount("#app");
