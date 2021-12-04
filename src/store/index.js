import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import cart from "./modules/cart";
import category from "./modules/category";
import user from "./modules/user";

export default createStore({
  modules: {
    cart,
    category,
    user,
  },

  plugins: [
    // 配置vuex的持久化
    createPersistedState({
      // 本地存储名字
      key: "erabbit-client-pc-124-store",
      // 需要持久化的模块
      paths: ["user", "cart"],
    }),
  ],
});
