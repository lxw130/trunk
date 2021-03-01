import Vue from 'vue'
import axios from 'axios';
// import { VueAxios } from './axios'
const service = axios.create({
    baseURL: '/', //api base_url
    timeout: 30000,
    withCredentials: true
});

const err = (err) => {
    const messageFn = (errmsg) => {
        return Message({
            message: errmsg,
            type: 'error',
            duration: 5 * 1000
        })
    }

    if (err && err.response) {
        console.log(err.response.config.url, '请求错误所对应的地址');
        const token = Vue.ls.get(ACCESS_TOKEN)
        switch (err.response.status) {
            case 400:
                messageFn('错误请求')
                break;
            case 401:
                messageFn('未授权，请重新登录')
                if (token) {
                    store.dispatch('Logout').then(() => {
                        setTimeout(() => {
                            window.location.reload()
                        }, 500)
                    })
                }
                break;
            case 403:
                messageFn('拒绝访问')
                break;
            case 404:
                messageFn('请求错误,未找到该资源')
                break;
            case 405:
                messageFn('请求方法未允许')
                break;
            case 408:
                messageFn('请求超时')
                break;
            case 414:

                if (err.response.data.message == '账号被禁用') {
                    messageFn('账号被禁用,请联系管理员')
                } else {
                    messageFn('用户名或密码错误')
                }

                break;
            case 500:
                messageFn('服务器端出错')
                break;
            case 501:
                messageFn('网络未实现')
                break;
            case 502:
                messageFn('网络错误,请稍后再试...')
                break;
            case 503:
                messageFn('服务不可用')
                break;
            case 504:
                messageFn('网络超时')
                break;
            case 505:
                messageFn('http版本不支持该请求')
                break;
            default:
                messageFn(`连接错误${err.response.status}`)
        }
    } else {
        messageFn('连接服务器失败');
    }

    return Promise.resolve(err)
}


const installer = {
    vm: {},
    install(Vue, router = {}) {
        Vue.use(VueAxios, router, service)
    }
}

export {
    installer as VueAxios,
    service as axios
}
export default service;