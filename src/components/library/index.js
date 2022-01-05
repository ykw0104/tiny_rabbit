// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展

import XtxSkeleton from "./xtx-skeleton.vue";
import XtxCarousel from "./xtx-carousel.vue";
import XtxMore from "./xtx-more.vue";

export default {
  install(app) {
    // 定义全局组件
    app.component(XtxSkeleton.name, XtxSkeleton); // 骨架屏
    app.component(XtxCarousel.name, XtxCarousel); // 轮播图
    app.component(XtxMore.name, XtxMore); // 轮播图

    // 定义指令
    defineDirective(app);
  },
};

import defaultImg from "@/assets/images/200.png";
// 定义指令
const defineDirective = (app) => {
  // 1.图片懒加载
  app.directive("lazy", {
    mounted(el, binding) {
      const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          // 进入可视区
          if (isIntersecting) {
            // 停止观察
            observer.unobserve(el);

            // 图片加载失败
            el.onerror = () => {
              el.src = defaultImg;
            };

            // 需要加载的图片
            el.src = binding.value;
          }
        },
        {
          threshold: 0,
        }
      );

      // 开启观察
      observer.observe(el);
    },
  });
};
