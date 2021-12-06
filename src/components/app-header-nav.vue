<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>

    <!-- 一级和二级类目 -->
    <li
      v-for="item in list"
      :key="item.id"
      @mouseenter="show(item)"
      @mouseleave="hidden(item)"
    >
      <!-- 一级类目 -->
      <RouterLink :to="`/category/${item.id}`" @click="hidden(item)">{{
        item.name
      }}</RouterLink>

      <!-- 二级类目 -->
      <div class="layer" :class="{ open: item.open }">
        <ul>
          <li v-for="subItem in item.children" :key="subItem.id">
            <RouterLink
              :to="`/category/sub/${subItem.id}`"
              @click="hidden(item)"
            >
              <img :src="subItem.picture" alt="" />
              <p>{{ subItem.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "AppHeaderNav",

  setup() {
    const store = useStore();
    // 获取分类列表
    const list = computed(() => store.state.category.list);

    /* 二级类目的显示: 鼠标移入一级类目 */
    const show = (item) => {
      store.commit("category/show", item.id);
    };

    /* 二级类目的隐藏: 鼠标移出一级类目, 鼠标点击一级类目, 鼠标点击二级类目 */
    const hidden = (item) => {
      store.commit("category/hidden", item.id);
    };

    return {
      list,

      hidden,
      show,
    };
  },
};
</script>
<style lang="scss">
.app-header-nav {
  display: flex;
  position: relative;
  z-index: 998;
  justify-content: space-around;
  width: 820px;
  padding-left: 40px;

  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    > a {
      display: inline-block;
      height: 32px;
      line-height: 32px;
      font-size: 16px;
    }

    &:hover {
      > a {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }

      // > .layer {
      //   // 二级类别的显示, 不再hover控制, 通过js控制
      //   height: 132px;
      //   opacity: 1;
      // }
    }
  }

  /* 二级类目 */
  .layer {
    position: absolute;
    top: 56px;
    left: -200px;
    width: 1240px;
    // 二级类目的隐藏
    height: 0;
    opacity: 0;
    overflow: hidden;
    box-shadow: 0 0 5px #ccc;
    background-color: #fff;
    transition: all 0.2s 0.1s;

    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      height: 132px;
      padding: 0 70px;

      li {
        width: 110px;
        text-align: center;

        img {
          width: 60px;
          height: 60px;
        }

        p {
          padding-top: 10px;
        }

        &:hover {
          p {
            color: $xtxColor;
          }
        }
      }
    }
  }

  /*  二级类别的显示 */
  .layer.open {
    height: 132px;
    opacity: 1;
  }
}
</style>
