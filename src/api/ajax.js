/*
使用axios和poromise封装的发ajax请求的函数模块
函数返回值是promise
 */
import axios from 'axios'
export default function ajax(url,data={},type='GET') {

  return new Promise(function (resolve,reject) {

    let promise;
    // get请求
    if(type==='GET') {
      // 根据data来拼query参数串
      let queryStr = '';
      // /username=tt&age=20 // data={usename:'tt',age : 20}
      //Object.keys(data) : 得到指定对象自身所有属性名组成的数组   ['username', 'password']
      Object.keys(data).forEach(key => {
        const value = data[key];
        queryStr += `${key}=${value}&`
      });
      if(queryStr) {// 有参数   username=tom&password=123&
        queryStr = queryStr.substring(0, queryStr.length-1) ; // username=tom&password=123
        url += '?' + queryStr  // /login?username=tom&password=123
      }
      promise=axios.get(url)
    } else {// post请求
      promise=axios.post(url, data)
    }
    promise
      .then(response=>{
        resolve(response.data)
      })
      .catch(error=>{
        reject(error)
      })
  })
}
