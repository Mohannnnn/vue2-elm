/**
 * 获取数据接口
 */
import fetch from './fetch';
import requestUrl from './requestUrl';
 
//获取位置
export const GetCurLocation = (latitude = 40.032344 , longitude = 116.281948) => fetch({
    url : requestUrl.currentLocation,
    data : {
        latitude : latitude ,
        longitude : longitude
    }
})