/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:10:27 
 * @Last Modified by:   wuhan 
 * @Last Modified time: 2018-09-19 21:10:27 
 */
const SET_LOCATIONMSG = 'SET_LOCATIONMSG';

const mutations = {
    //设置地理位置信息
    [SET_LOCATIONMSG](state , {latitude , longitude , city_id , city , name}) {
        state.latitude  = latitude;
        state.longitude = longitude;
        state.cityId    = city_id;
        state.cityName  = city;
        state.curLocalName = name;
    }
}

export default mutations;