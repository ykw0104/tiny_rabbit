/* 分类模块 */
import { topCategory } from "@/api/constants";
import { $findAllCategory } from "@/api/category";

export default {
  namespaced: true,

  state() {
    return {
      // 分类数据, 这里赋值是防止一开始页面没数据时出现空白
      list: topCategory.map((item) => {
        return {
          name: item,
        };
      }),
    };
  },

  mutations: {
    /* 设置分类 */
    setList(state, payload) {
      // payload: 所有分类集合
      state.list = payload;
    },

    /* 二级类目的显示 */
    show(state, id) {
      const curCategory = state.list.find((item) => item.id === id);
      curCategory.open = true;
    },

    /* 二级类目的隐藏 */
    hidden(state, id) {
      const curCategory = state.list.find((item) => item.id === id);
      curCategory.open = false;
    },
  },

  actions: {
    /* 获取分类 */
    async getList({ commit }) {
      // 请求分类数据
      const data = await $findAllCategory();
      // 每个分类加上控制二级类目的显示和隐藏
      data.result.forEach((top) => {
        // 二级类目默认隐藏
        top.open = false;
      });
      // 修改分类数据
      commit("setList", data.result);
    },
  },
};
