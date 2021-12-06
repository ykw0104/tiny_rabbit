```
项目地址:  http://erabbit.itheima.net/
笔记:  http://zhoushugang.gitee.io/erabbit-client-pc-document/
接口:  https://apipc-xiaotuxian-front.itheima.net
接口文档: http://zhoushugang.gitee.io/erabbit-client-pc-document/api.html#
b站视频:  https://www.bilibili.com/video/BV1v341117sA?p=9
```

```
utils/request.js
    encodeURIComponent() 进行URI编码
    [method.toLowerCase() === "get" ? "params" : "data"]: submitData   对象使用动态key
```

```
vue.config.js
    style-resources-loader 配置scss等文件自动注入
```

```
app-header-nav.vue
    1. 二级类目的使用
        关键样式: height: 0; opacity: 0; overflow: hidden;
    2. 二级类目的显示和隐藏
        通过:class="{ open: item.open }" 控制 (一级类目的鼠标移入,移出,点击 和 二级类目的点击会改变open值)
```
