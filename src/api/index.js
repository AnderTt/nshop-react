/*
包含n个接口请求函数的模块
 */
import ajax from './ajax'
//1，获取首页数据
export const reqHome = () => ajax('/home');

//2，获取识物页数据
export const reqKnowledge = () => ajax('/Knowledge');

//3，获取分类页数据
export const reqCategory = () => ajax('/category');
