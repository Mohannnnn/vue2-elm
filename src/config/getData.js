/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:16:14 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-21 19:03:16
 */

import fetch from './fetch';
import requestUrl from './requestUrl';
 
//获取位置信息
export const getCurLocation = (latitude = 40.032344 , longitude = 116.281948) => fetch({
    url : requestUrl.currentLocation,
    data : {
        latitude : latitude ,
        longitude : longitude
    }
})

//获取热搜列表
export const getSearchHotList = (latitude , longitude) => fetch({
    url : requestUrl.searchHotList,
    data : {
        latitude : latitude,
        longitude : longitude
    }
})

//获取搜索推荐结果列表
export const getSearchRelateList = (key , latitude , longitude , cityId = 3) => fetch({
    url : requestUrl.searchRelateList,
    data : {
        kw : key ,
        latitude : latitude,
        longitude : longitude,
        city_id : cityId
    }
})