// 引入ajax
import { axios } from "@/utils/request";
const api = {
    addstation: 'http://test.energy-ai.com:8913/display/stationInfo/addstation',
    updatestation: 'http://test.energy-ai.com:8913/display/stationInfo/updatestation',
}

export function addstation(parameter) {
    return axios({
        url: api.addstation,
        method: 'post',
        data: parameter
    })
}
export function updatestation(parameter) {
    return axios({
        url: api.updatestation,
        method: 'post',
        data: parameter
    })
}
