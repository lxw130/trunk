/*
首页相关的请求
*/
// 引入ajax
import { axios } from "@/utils/request";
const api = {
  station: 'http://test.energy-ai.com:8913/display/stationInfo/station',
  packdata: 'http://test.energy-ai.com:8913/display/stationInfo/packdata',
  warningcount: 'http://test.energy-ai.com:8913/display/stationInfo/warningcount',
  latestwarning: 'http://test.energy-ai.com:8913/display/stationInfo/latestwarning',
}

export function station(parameter) {
    return axios({
        url: api.station,
        method: 'post',
        data: parameter
    })
}
export function packdata(parameter) {
    return axios({
        url: api.packdata,
        method: 'post',
        data: parameter
    })
}
export function warningcount(parameter) {
    return axios({
        url: api.warningcount,
        method: 'post',
        data: parameter
    })
}
export function latestwarning(parameter) {
    return axios({
        url: api.latestwarning,
        method: 'post',
        data: parameter
    })
}
