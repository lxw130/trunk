/*
首页相关的请求
*/
// 引入ajax
import { axios } from "@/utils/request";
const api = {
    send: 'http://test.energy-ai.com:8913/display/stationInfo/send',
    configack: 'http://test.energy-ai.com:8913/display/stationInfo/configack',
}

export function send(parameter) {
    return axios({
        url: api.send,
        method: 'post',
        data: parameter
    })
}
export function configack(parameter) {
    return axios({
        url: api.configack,
        method: 'post',
        data: parameter
    })
}
