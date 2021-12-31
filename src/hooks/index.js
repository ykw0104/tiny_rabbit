/* 提供复用逻辑的函数(钩子) */
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";

/**
 * 数据懒加载函数
 * @param {Element} target - Dom对象
 * @param {Function} apiFn - API函数
 */
export const useLazyData = (target, apiFn) => {
  const result = ref([]);
  // stop 停止观察
  const { stop } = useIntersectionObserver(
    // 监听的元素
    target,
    ([{ isIntersecting }], observerElement) => {
      //isIntersecting : 是否进入可视区
      if (isIntersecting) {
        stop();
        // 调用API函数获取数据
        apiFn().then((data) => {
          result.value = data.result;
        });
      }
    }
  );

  return result;
};
