<template>
  <footer class="app-footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
          <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
        </dl>

        <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
          <dd><i class="iconfont icon-weibo"></i> 微博</dd>
        </dl>

        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode"><img src="../assets/images/qrcode.jpg" /></dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>

        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">
            400-0000-000 <small>周一至周日 8:00-18:00</small>
          </dd>
        </dl>
      </div>
    </div>

    <!-- 其它 -->
    <div class="extra">
      <div class="container">
        <!-- 大标题 -->
        <div class="slogan">
          <a href="javascript:;">
            <i class="iconfont icon-footer01"></i>
            <span>价格亲民</span>
          </a>

          <a href="javascript:;">
            <i class="iconfont icon-footer02"></i>
            <span>物流快捷</span>
          </a>

          <a href="javascript:;">
            <i class="iconfont icon-footer03"></i>
            <span>品质新鲜</span>
          </a>
        </div>

        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">配送与验收</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">搜索推荐</a>
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped lang="scss">
.app-footer {
  padding-top: 20px;
  overflow: hidden;
  background-color: #f5f5f5;

  .contact {
    background: #fff;

    .container {
      display: flex;
      padding: 60px 0 40px 25px;
    }

    dl {
      height: 190px;
      padding: 0 72px;
      text-align: center;

      border-right: 1px solid #f2f2f2;
      color: #999;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    }

    dt {
      line-height: 1;
      font-size: 18px;
    }

    dd {
      float: left;
      width: 92px;
      height: 92px;
      padding-top: 10px;
      margin: 36px 12px 0 0;
      border: 1px solid #ededed;

      .iconfont {
        display: block;
        font-size: 36px;
        color: #666;
      }

      &:hover {
        .iconfont {
          color: $xtxColor;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .qrcode {
      width: 92px;
      height: 92px;
      padding: 7px;
      border: 1px solid #ededed;
    }

    .download {
      width: auto;
      height: auto;
      padding-top: 5px;
      font-size: 14px;
      border: none;

      span {
        display: block;
      }

      a {
        display: block;
        padding: 10px 25px;
        margin-top: 5px;
        line-height: 1;
        border-radius: 2px;
        color: #fff;
        background-color: $xtxColor;
      }
    }

    .hotline {
      width: auto;
      height: auto;
      padding-top: 20px;
      font-size: 22px;
      border: none;
      color: #666;

      small {
        display: block;
        font-size: 15px;
        color: #999;
      }
    }
  }

  .extra {
    background-color: #333;
  }

  .slogan {
    display: flex;
    justify-content: space-between;
    height: 178px;
    line-height: 58px;
    padding: 60px 100px;
    border-bottom: 1px solid #434343;

    a {
      height: 58px;
      line-height: 58px;
      font-size: 28px;
      color: #fff;

      i {
        margin-right: 10px;
        vertical-align: middle;
        font-size: 50px;
        font-weight: 100;
      }

      span {
        vertical-align: middle;
        text-shadow: 0 0 1px #333;
      }
    }
  }

  .copyright {
    height: 170px;
    padding-top: 40px;
    text-align: center;
    font-size: 15px;
    color: #999;

    p {
      line-height: 1;
      margin-bottom: 20px;
    }

    a {
      padding: 0 10px;
      line-height: 1;
      border-right: 1px solid #999;
      color: #999;

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
