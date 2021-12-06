/* 分类相关 */
import request from "@/utils/request";

/**
 *  获取首页-全部分类
 * @returns Promise
 */
export const $findAllCategory = () => {
  return request("/home/category/head", "GET");
};
