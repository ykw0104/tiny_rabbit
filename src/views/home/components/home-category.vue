<template>
  <div class="home-category" @mouseleave="categoryId = null">
    <!-- 左侧分类菜单 -->
    <ul class="menu">
      <li
        :class="{ active: categoryId && categoryId === item.id }"
        v-for="item in menuList"
        :key="item.id"
        @mouseenter="categoryId = item.id"
      >
        <!-- 一级分类 -->
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>

        <!-- 二级分类(只取两个) -->
        <template v-if="item.children">
          <RouterLink
            v-for="subItem in item.children"
            :key="subItem.id"
            :to="`/category/sub/${subItem.id}`"
            >{{ subItem.name }}</RouterLink
          >
        </template>
        <template v-else>
          <XtxSkeleton
            width="60px"
            height="18px"
            style="margin-right: 5px"
            bg="rgba(255,255,255,0.2)"
          />
          <XtxSkeleton width="50px" height="18px" bg="rgba(255,255,255,0.2)" />
        </template>
      </li>
    </ul>

    <!-- 左侧分类弹层 -->
    <div class="layer">
      <h4>
        {{ curCategory && curCategory.id === "brand" ? "品牌" : "分类" }}推荐
        <small>根据您的购买或浏览记录推荐</small>
      </h4>
      <!-- 左侧商品 -->
      <ul v-if="curCategory && curCategory.goods">
        <li v-for="item in curCategory.goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <div class="info">
              <p class="name ellipsis-2">{{ item.name }}</p>
              <p class="desc ellipsis">{{ item.desc }}</p>
              <p class="price"><i>¥</i>{{ item.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <!-- 左侧品牌 -->
      <ul v-if="curCategory && curCategory.brands">
        <li class="brand" v-for="brand in curCategory.brands" :key="brand.id">
          <RouterLink to="/">
            <img :src="brand.picture" alt="" />
            <div class="info">
              <p class="place">
                <i class="iconfont icon-dingwei"></i>{{ brand.place }}
              </p>
              <p class="name ellipsis">{{ brand.name }}</p>
              <p class="desc ellipsis-2">{{ brand.desc }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref, reactive, watch } from "vue";
import { useStore } from "vuex";
import { $findBrand } from "@/api/home";

export default {
  name: "HomeCategory",
  setup() {
    const store = useStore();
    // 一个品牌
    const brand = reactive({
      id: "brand",
      name: "品牌",
      children: [{ id: "brand-children", name: "品牌推荐" }],
      // 品牌列表
      brands: [],
    });

    // 左侧的九个分类(每个分类包含1个大分类+2个小分类) + 一个品牌
    const menuList = computed(() => {
      // 加入九个分类
      const list = store.state.category.list.map((item) => {
        return {
          id: item.id,
          name: item.name,
          children: item.children && item.children.slice(0, 2), // 2个小分类
          goods: item.goods,
        };
      });
      // 加入一个品牌
      list.push(brand);
      return list;
    });

    // 左侧鼠标移动到的分类Id
    const categoryId = ref(null);
    // 左侧鼠标移动到的分类商品数据
    const curCategory = computed(() => {
      return menuList.value.find((item) => item.id === categoryId.value);
    });

    // 获取品牌数据
    $findBrand().then((data) => {
      brand.brands = data.result;
    });

    return {
      categoryId,
      curCategory,
      menuList,
    };
  },
};
</script>

<style scoped lang="scss">
.home-category {
  position: relative;
  z-index: 99;
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);

  .menu {
    li {
      height: 50px;
      line-height: 50px;
      padding-left: 40px;

      &:hover,
      &.active {
        background: $xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }
    }
  }

  .layer {
    display: none;
    position: absolute;
    left: 250px;
    top: 0;
    width: 990px;
    height: 500px;
    padding: 0 15px;
    background: rgba(255, 255, 255, 0.8);

    h4 {
      line-height: 80px;
      font-size: 20px;
      font-weight: normal;

      small {
        font-size: 16px;
        color: #666;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;

        &:nth-child(3n) {
          margin-right: 0;
        }

        a {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 10px;

          &:hover {
            background: #e3f9f4;
          }

          img {
            width: 95px;
            height: 95px;
          }

          .info {
            width: 190px;
            line-height: 24px;
            padding-left: 10px;

            .name {
              font-size: 16px;
              color: #666;
            }

            .desc {
              color: #999;
            }

            .price {
              font-size: 22px;
              color: $priceColor;

              i {
                font-size: 16px;
              }
            }
          }
        }
      }

      /* 品牌 */
      li.brand {
        height: 180px;

        a {
          align-items: flex-start;

          img {
            width: 120px;
            height: 160px;
          }

          .info {
            p {
              margin-top: 8px;
            }

            .place {
              color: #999;
            }
          }
        }
      }
    }
  }

  &:hover {
    .layer {
      display: block;
    }
  }
}

/* 骨架动画 */
.xtx-skeleton {
  animation: fade 1s linear infinite alternate;
}

@keyframes fade {
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
}
</style>
