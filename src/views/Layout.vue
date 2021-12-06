<template>
  <!-- 1 顶部通栏 -->
  <AppNavbar />

  <!-- 2.1 头部组件 -->
  <AppHeader />
  <!-- 2.2 头部吸顶组件 -->
  <AppHeaderSticky />

  <!-- 3. 内容容器 -->
  <main class="app-body">
    <!-- 二级路由 -->
    <RouterView />
  </main>

  <!-- 4. 底部组件 -->
  <AppFooter />
</template>

<script>
import AppNavbar from "@/components/app-navbar";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import AppHeaderSticky from "@/components/app-header-sticky";

import { useStore } from "vuex";

export default {
  name: "Layout",

  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky,
  },

  setup() {
    const store = useStore();
    // 请求分类
    store.dispatch("category/getList");
  },
};
</script>
<style lang="scss" scoped>
.app-body {
  min-height: 600px;
}
</style>
