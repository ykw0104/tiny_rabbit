/* 查看更多 */
<template>
  <RouterLink class="xtx-more" :to="path">
    <span>查看全部</span>
    <i class="iconfont icon-angle-right"></i>
  </RouterLink>
</template>

<script>
export default {
  name: "XtxMore",
  props: {
    path: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style scoped lang="scss">
.xtx-more {
  margin-bottom: 2px;

  span {
    margin-right: 4px;
    vertical-align: middle;
    font-size: 16px;
    color: #999;
  }

  i {
    position: relative;
    top: 2px;
    vertical-align: middle;
    font-size: 14px;
    color: #ccc;
  }

  &:hover {
    span,
    i {
      color: $xtxColor;
    }
  }
}
</style>
