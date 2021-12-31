<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a
        href="javascript:;"
        class="iconfont icon-angle-left prev"
        :class="{ disabled: index === 0 }"
        @click="toggle(-1)"
      ></a>
      <a
        href="javascript:;"
        class="iconfont icon-angle-right next"
        :class="{ disabled: index === 1 }"
        @click="toggle(1)"
      ></a>
    </template>

    <div ref="target" class="box">
      <Transition name="fade">
        <ul
          v-if="brands.length"
          class="list"
          :style="{ transform: `translateX(${-index * 1240}px)` }"
        >
          <li v-for="item in brands" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
            </RouterLink>
          </li>
        </ul>

        <div v-else class="skeleton">
          <XtxSkeleton
            class="item"
            v-for="i in 5"
            :key="i"
            animated
            bg="#e4e4e4"
            width="240px"
            height="305px"
          />
        </div>
      </Transition>
    </div>
  </HomePanel>
</template>

<script>
import HomePanel from "./home-panel";
import { ref } from "vue";
import { $findBrand } from "@/api/home";
import { useLazyData } from "@/hooks";

export default {
  name: "HomeBrand",
  components: { HomePanel },
  setup() {
    // 获取品牌数据
    // const brands = ref([]);

    // $findBrand(10).then((data) => {
    //   brands.value = data.result;
    // });
    const { target, result } = useLazyData(() => $findBrand(10));

    // 左右箭头切换效果,只有0,1两页
    const index = ref(0);
    // 1. 点击上一页
    // 2. 点击下一页
    const toggle = (step) => {
      const newIndex = index.value + step;
      // 超出范围return
      if (newIndex < 0 || newIndex > 1) return;
      // 获得当前页 0页或1页
      index.value = newIndex;
    };
    return {
      brands: result,
      index,
      target,

      toggle,
    };
  },
};
</script>

<style scoped lang="scss">
.skeleton {
  display: flex;
  width: 100%;

  .item {
    margin-right: 10px;

    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}

.home-panel {
  background: #f5f5f5;
}

.iconfont {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  text-align: center;
  background: #ccc;
  color: #fff;
  background: $xtxColor;

  &::before {
    position: relative;
    top: -2px;
    font-size: 12px;
  }

  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}

.box {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 345px;
  padding-bottom: 40px;

  .list {
    display: flex;
    width: 200%;
    transition: all 1s;

    li {
      width: 240px;
      margin-right: 10px;

      &:nth-child(5n) {
        margin-right: 0;
      }

      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
