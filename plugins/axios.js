import Qs from 'qs';
 
export default function (app) {
  let axios = app.$axios; 
  // 基本配置
  axios.defaults.timeout = 10000;
  axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
 
  // 请求回调
  axios.onRequest(config => {
      if(config.method == 'post'){
        config.data = Qs.stringify(config.data)
      }
      return config
  })
 
  // // 返回回调
  // axios.onResponse(res => {
  //   console.log('返回回调')
  //   return res
  // })
 
  // 错误回调
  axios.onError(error => {})
};