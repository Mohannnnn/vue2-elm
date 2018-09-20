/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:16:14 
 * @Last Modified by:   wuhan 
 * @Last Modified time: 2018-09-19 21:16:14 
 */

import fetch from './fetch';
import requestUrl from './requestUrl';
 
//获取位置
export const getCurLocation = (latitude = 40.032344 , longitude = 116.281948) => fetch({
    url : requestUrl.currentLocation,
    data : {
        latitude : latitude ,
        longitude : longitude
    }
})