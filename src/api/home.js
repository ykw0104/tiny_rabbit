/* 首页相关 */
import request from "@/utils/request";

/**
 * 获取品牌
 * @param {Integer} limit - 品牌个数
 * @returns Promise
 */
export const $findBrand = (limit = 6) => {
  return request("/home/brand", "GET", { limit });
};

/**
 * 获取广告区的轮播图
 * @returns Promise
 */
export const $findBanner = () => {
  return request("/home/banner", "GET");
};

/**
 * 获取新鲜好物
 * @returns Promise
 */
export const $findNew = () => {
  return request("/home/new", "GET");
};

/**
 * 获取人气推荐
 * @returns Promise
 */
export const $findHot = () => {
  return request("/home/hot", "GET");
};

/**
 * 获取商品板块
 * @returns Promise
 */
export const $findGoods = () => {
  return request("/home/goods", "GET");
};

/**
 * 获取最新专辑
 * @returns Promise
 */
export const $findSpecial = () => {
  return request("/home/special", "GET");
};
