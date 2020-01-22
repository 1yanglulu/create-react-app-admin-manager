import axios from 'axios'
import envconfig from './envconfig';
console.log(envconfig.baseURL)
export default class server{
    axios(method,url,params){
        return new Promise((resolve,reject)=>{
            if(typeof params !=='object'){
                params={}
            }
            let _option=params;
            _option={
                method,
                url,
                baseURL:envconfig.baseURL,
                timeout:25*1000,
                params:null,
                data:null,
                headers:{'Content-Type': 'application/json; charset=UTF-8'},
                withCredentials:true,//是否携带cookies发起请求
                validateStatus:(status)=>{
                    return status >=200 && status<300;
                },
                ...params,
            }
            console.log(_option)
            axios.request(_option).then(res=>{
                console.log("serveres",res)
                resolve(typeof res.data==='object'?res.data:JSON.parse(res.data))
            },error=>{
                if(error.response){
                    reject(error.response.data)
                }else{
                    reject(error)
                }
            })
        })
    }
}