import axios from "axios";
import store from "@/store";
import router from "@/router";

// 导出baseURL
export const baseURL = "https://apipc-xiaotuxian-front.itheima.net";

const instance = axios.create({
  baseURL,
  timeout: 5000,
});

/* 请求拦截器 */
instance.interceptors.request.use(
  (config) => {
    // 获取用户信息
    const { profile } = store.state.user;

    // 判断是否有token, 有设置请求头携带token
    if (profile.token) {
      config.headers.Authorization = `Bearer ${profile.token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/* 响应拦截器 */
instance.interceptors.response.use(
  (res) => {
    // 只需要response里的data数据
    return res.data;
  },
  (err) => {
    // 401 状态码, 处理token失效
    if (err.response && err.response.status === 401) {
      // 1. 清空无效用户信息
      store.commit("user/setUser", {});

      // 2. 跳转到登录页,跳转需要传参(当前路由地址)给登录页
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath); // 对当前路由地址转码
      router.push("/login?redirectUrl=" + fullPath);
    }
    return Promise.reject(err);
  }
);

/* 请求工具函数 */
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
    // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
    // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
    [method.toLowerCase() === "get" ? "params" : "data"]: submitData,
  });
};
