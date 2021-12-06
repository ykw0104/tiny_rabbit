<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li>
      <!-- 一级类目 -->
      <a href="#">美食</a>
      <!-- 二级类目 -->
      <div class="layer">
        <ul>
          <li v-for="i in 10" :key="i">
            <a href="#">
              <img
                src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(4).png"
                alt=""
              />
              <p>果干</p>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li><a href="#">餐厨</a></li>
    <li><a href="#">艺术</a></li>
    <li><a href="#">电器</a></li>
    <li><a href="#">居家</a></li>
    <li><a href="#">洗护</a></li>
    <li><a href="#">孕婴</a></li>
    <li><a href="#">服装</a></li>
    <li><a href="#">杂货</a></li>
  </ul>
</template>

<script>
export default {
  name: "AppHeaderNav",
};
</script>
<style lang="scss">
.app-header-nav {
  position: relative;
  display: flex;
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

      > .layer {
        // 二级类别的显示
        height: 132px;
        opacity: 1;
      }
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
}
</style>
