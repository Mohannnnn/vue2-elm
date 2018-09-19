/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:10:27 
 * @Last Modified by:   wuhan 
 * @Last Modified time: 2018-09-19 21:10:27 
 */
const SET_ITUDE = 'SET_ITUDE';
const SET_CURLONAME = 'SET_CURLONAME';

const mutations = {
    //设置经纬度
    [SET_ITUDE](state , {latitude , longitude}) {
        state.latitude = latitude;
		state.longitude = longitude;
    },
    //设置位置地点
    [SET_CURLONAME](state , {curLoName}) {
        state.curLoName = curLoName;
    }
}

export default mutations;