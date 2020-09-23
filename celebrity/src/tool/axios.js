// Axios工具类函数
import axios from "axios";
// 请求时间,并生成实例
    const instantiation = axios.create({
        timeout: 1000 * 20
    })
// 请求头
instantiation.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 拦截器
instantiation.interceptors.response.use(response=>{
        if(response.status === 200){
            return Promise.resolve(response)
        }else{
            return Promise.reject(response)
        }
    },error => {
        if(error.response.status){
            switch (error.response.status){
                case 401:
                    console.log("401：未登录")
                    break;
                case 403:
                    console.log("登录过期，请重新登录")
                    break;
                case 404:
                    console.log("网络请求不存在")
                    break;
                default:
                    console.log(error)
            }
            return Promise.reject(error.response)
        }
    });
export default instantiation;
// POST请求
