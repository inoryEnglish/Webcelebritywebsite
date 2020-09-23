import QS from "qs";
import axios from "axios"
export function AxiosPost(url, params){
    return new Promise((resolve, reject)=>{
        axios.post(url,QS.stringify(params)).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err.data)
        })
    })
}
// GET请求
export function AxiosGet(url, params){
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err.data)
        })
    })
}