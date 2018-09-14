/*使用mock.js提供mock数据接口*/
import Mock from 'mockjs';
import data from './data.json'

//首页的mock数据接口
Mock.mock('/home',{code:0,data:data.home});
//识物的mock数据接口
Mock.mock('/Knowledge',{code:0,data:data.Knowledge});
//分类的mock数据接口
Mock.mock('/category',{code:0,data:data.category});
