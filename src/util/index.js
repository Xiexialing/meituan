/**
 * Created by Administrator on 2018/7/3/003.
 */
/**
 * 设置localStorage
 * @param key 键
 * @param val 值
 */
export const setLocal = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
};

/**
 * 获取localStorage的key对应的值
 * @param key
 */
export const getLocal = (key) => {
  return JSON.parse(localStorage.getItem(key))
};