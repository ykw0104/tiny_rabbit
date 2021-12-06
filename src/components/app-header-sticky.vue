<template>
  <div class="app-header-sticky" :class="{ show: y >= 78 }">
    <div class="container" v-show="y >= 78">
      <RouterLink class="logo" to="/" />

      <AppHeaderNav />

      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderNav from "./app-header-nav";

// import { ref, onMounted } from "vue";
import { useWindowScroll } from "@vueuse/core";

export default {
  name: "AppHeaderSticky",
  components: { AppHeaderNav },
  setup() {
    // const y = ref(0);
    // onMounted(() => {
    //   /* 实时记录卷去的高度 */
    //   window.onscroll = () => {
    //     const scrollTop = document.documentElement.scrollTop;
    //     y.value = scrollTop;
    //   };
    // });

    // 获取y卷去的高度
    const { y } = useWindowScroll();
    return {
      y,
    };
  },
};
</script>

<style scoped lang="scss">
.app-header-sticky {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #e4e4e4;
  background-color: #fff;
  /* 顶部吸顶隐藏 */
  opacity: 0;
  transform: translateY(-100%);

  /* 顶部吸顶显示 */
  &.show {
    transition: all 0.3s linear;
    opacity: 1;
    transform: none;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url(../assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    display: flex;
    width: 220px;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;
    text-align: center;

    a {
      width: 38px;
      line-height: 1;
      margin-right: 40px;
      font-size: 16px;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}
</style>
