let baseURL;
let imgUrl='';
console.log("env",process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
    console.log('开发环境')
    baseURL = 'https://local.duizhuang.com:30002'
}else if(process.env.NODE_ENV === 'production'){
    console.log('生产环境')
    baseURL = 'https://local.duizhuang.com:30002'
}else if(process.env.NODE_ENV === 'alpha'){
    console.log('线上版本')
    baseURL = 'http://localhost:3000'
}
export default {
    imgUrl,
    baseURL
}