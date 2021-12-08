<template>
  <div class="home-banner">
    <!-- 全局的轮播图组件 -->
    <XtxCarousel :sliders="sliders" auto-play />
  </div>
</template>
<script>
import { ref } from "vue";
import { $findBanner } from "@/api/home";

export default {
  name: "HomeBanner",
  setup() {
    const sliders = ref([]);
    // 请求轮播图数据
    $findBanner().then((data) => {
      sliders.value = data.result;
    });

    return {
      sliders,
    };
  },
};
</script>
<style scoped lang="scss">
.home-banner {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  width: 1240px;
  height: 500px;
}

/* 修改banner样式 */
.xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
